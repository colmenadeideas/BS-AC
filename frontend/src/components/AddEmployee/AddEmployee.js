import React from 'react';
import Swal from 'sweetalert2'
import './AddEmployee.css'
import Navbar from '../Navbar/Navbar'
import FormEmployee from './FormEmployee'
import FormSchedule from './FormSchedule'

//Redux
import { useDispatch } from 'react-redux';
import { addEmployeeAction, addScheduleAction } from '../../store/actions/employeesAction'

const AddEmployee = ({history}) => {

    const dispatch = useDispatch();
    
    const addSche = data => dispatch(addScheduleAction(data))
    const addEmp = data => dispatch(addEmployeeAction(data))
    
    //variable para evaluar la respuesta de la API
    let res = -1

    const submitEmployee = data => {
        console.log(data);

        res = addEmp(data)

        if (res === 1) {
            Swal.fire({
                icon: 'success',
                title: 'Agregado exitoso',
                text: 'Hay un nuevo empleado!',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Agregado fallido',
                text: 'Intente de nuevo mas tarde!',
            })
        }
    }

    const submitSchedule = data => {
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
                    if (result.dismiss === Swal.DismissReason.timer) {
                        res = addSche(data);
                        if (res === 1) {
                            Swal.fire(
                                'Enhorabuena!',
                                'Todos sus empleados tienen horario',
                                'success'
                            )
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Agregado fallido',
                                text: 'Intente de nuevo mas tarde!',
                            })
                        }
                    }
                })
            } else {
                res = addSche(data);
                if (res === 1) {
                    Swal.fire(
                        'Agregado con Exito!',
                        'Continue con los demas empleados',
                        'success'
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Agregado fallido',
                        text: 'Intente de nuevo mas tarde!',
                    })
                }
            }

        })
    }

    return (  
        <React.Fragment>
            <Navbar history={history} />
            <div>
                <FormEmployee 
                    submit={submitEmployee}
                />
                <FormSchedule 
                    submit={submitSchedule}
                />
            </div>
        </React.Fragment>
    );
}
 
export default AddEmployee;