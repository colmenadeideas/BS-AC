import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import './Employees.css'
import Navbar from '../Navbar/Navbar'
import FormEmployee from './FormEmployee'
import FormSchedule from './FormSchedule'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeAction, editEmployeeAction, addScheduleAction } from '../../store/actions/employeesAction'

//posteriormente el empToEdit vendra como prop al seleccionar el empleado a editar en otra pagina
const Employee = (props, {history}) => { 

    //states
    const [empToEdit, setEmpToEdit] = useState('')
    const [scheToEdit, setScheToEdit] = useState('')

    //states de redux
    const empUsed = useSelector( state => state.employees.employee);
    //console.log(empUsed);
    //metodos de redux necesarios
    const dispatch = useDispatch();

    const addEmp = data => dispatch(addEmployeeAction(data))
    const editEmp = (id, data) => dispatch(editEmployeeAction(id, data))
    const addSche = (data, param) => dispatch(addScheduleAction(data, param))

    //variable para evaluar la respuesta de la API
    let res = -1

    const submitEmployee = (action, data, id) => {
        console.log(data);

        if (action === 'add') {
            res = addEmp(data)
            console.log(res);
        } else {
            editEmp(id, data)
        }
    }

    const submitSchedule = (action, data, id) => {
        console.log(data)

        let timerInterval
        Swal.fire({
            title: 'Horario Nuevo',
            text: "Agregar Horario a Todos los empleados?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar a todos!',
            cancelButtonText: 'No, solo a este'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Agregando a todos los empleados',
                    html: '<b></b>',
                    timer: 1500,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        Swal.getContent().querySelector('b')
                        .textContent = Swal.getTimerLeft()
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer ) {
                        addSche(data, 'all')
                        console.log('all');
                    }
                })
            }
            if (result.dismiss === Swal.DismissReason.cancel) {
                addSche(data, 'only');
                console.log('only');
            }

        })
    }

    const checkUndefined = (value) => {
        if (typeof(props.location.state ) !== 'undefined') {
            return value;
        } else {
            return -1;
        }
    }

    useEffect(() => {
        let checkState = checkUndefined(props.location.state);
        if (checkState !== -1) {
            let checkEmp = checkUndefined(props.location.state.empToEdit);
            let checkSche = checkUndefined(props.location.state.scheToEdit);
            if (checkEmp !== 1) {
                setEmpToEdit(props.location.state.empToEdit); 
            }
            if (checkSche!== -1) {
                setScheToEdit(props.location.state.scheToEdit);
            }
        }
    }, [])

    return (  
        <React.Fragment>
            <Navbar history={history} />
            <div>
                <FormEmployee 
                    submit={submitEmployee}
                    empToEdit={empToEdit}
                />
                <FormSchedule 
                    submit={submitSchedule}
                    scheToEdit={scheToEdit}
                />
            </div>
        </React.Fragment>
    );
}
 
export default Employee;