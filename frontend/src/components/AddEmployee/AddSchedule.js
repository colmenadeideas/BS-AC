import React, { useState } from 'react';
import Swal from 'sweetalert2'

const AddSchedule = () => {

    const [type, setType] = useState('')
    const [days, setDays] = useState([])
    const [since, setSince] = useState('')
    const [until, setUntil] = useState('')

    const changeDays = e => {
        let newDay = e.target.value

        if (e.target.checked === true) {
            setDays([...days, newDay]);
        } else {
            let newDays = [...days]
            setDays(newDays.filter( day => day !== newDay))
        }
    }

    const handleSubmitSche = e => {
        e.preventDefault()

        console.log(type);
        console.log(days);

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

    //console.log(days);

    return ( 
        <>
            <h2>Agregar el horario</h2>
            <form onSubmit={handleSubmitSche}>
                {/* radio */}
                <div className="row justify-content-center">
                    <div className="col-9">
                        <h5 className="m-4">Tipo de Horario</h5>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type-1" value="medio"  onChange={e => setType(e.target.value)}/>
                            <label className="form-check-label" htmlFor="type-1">
                                Medio
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type-2" value="completo" onChange={e => setType(e.target.value)}/>
                            <label className="form-check-label" htmlFor="type-2">
                                Completo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type-3" value="personalizar" onChange={e => setType(e.target.value)}/>
                            <label className="form-check-label" htmlFor="type-3">
                                Personalizar
                            </label>
                        </div>
                        <br/><br/>

                        {/* checkbox */}
                        <h5 className="m-4">Seleccione los Dias</h5>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-1" value="lunes" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-1">Lunes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-2" value="martes" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-2">Martes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-3" value="miercoles" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-3">Miercoles</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-3" value="jueves" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-4">Jueves</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-3" value="viernes" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-5">Viernes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-3" value="sabado" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-6">Sabado</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day-3" value="domingo" onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day-7">Domingo</label>
                        </div>
                        <br/><br/>

                        {/* inputs */}
                        <h5 className="m-4">Seleccione las Horas</h5>
                        <div className="form-row">
                            <div className="col-3">
                                <label className="sr-only" htmlFor="since">Desde</label>
                                <input type="text" className="user__input" id="since" placeholder="desde" onChange={e => setSince(e.target.value)}/>
                            </div>
                            <div className="col-3">
                                <label className="sr-only" htmlFor="until">Hasta</label>
                                <input type="text" className="user__input" id="until" placeholder="hasta" onChange={e => setUntil(e.target.value)}/>
                            </div>
                        </div>

                    </div>
                </div>

                <button type="submit" className="btn btn-dark" >Agregar Horario</button>
            </form>

        </>
    );
}
 
export default AddSchedule;