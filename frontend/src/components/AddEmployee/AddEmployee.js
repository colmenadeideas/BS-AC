import React from 'react';
//import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './AddEmployee.css'
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddEmployee = ({history}) => {

    const addSchedule = e => {
        e.preventDefault()

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
                        Swal.fire(
                            'Enhorabuena!',
                            'Todos sus empleados tienen horario',
                            'success'
                        )
                    }
                })
            } else {
                Swal.fire(
                    'Agregado con Exito!',
                    'Continue con los demas empleados',
                    'success'
                )
            }
        })
    }

    return (  
        <React.Fragment>
            <Navbar />
            <div>
                <h2>Empecemos a agregar tus empleados</h2>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="user-img">
                            <div className="user">
                                <FontAwesomeIcon icon="user" />
                            </div>
                            <div className="agregar"><FontAwesomeIcon icon="plus" /></div>
                        </div>
                        <p>Texto simulado</p>
                    </div>
                    <div className="col-7">
                        <input type="text" placeholder="Nombre y apellido" required/>
                        <input type="text" placeholder="Cedula" required/>
                        <input type="text" placeholder="Cargo" required/>
                    </div>
                </div>
                <div><button className="btn btn-dark" onClick={addSchedule}>Agregar Horario</button></div>
            </div>
        </React.Fragment>
    );
}
 
export default AddEmployee;