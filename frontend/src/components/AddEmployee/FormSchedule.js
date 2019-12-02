import React, { useState } from 'react';
import Swal from 'sweetalert2'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const FormSchedule = ({submit}) => {

    //crecaion de los states
    const [type, setType] = useState('')
    const [days, setDays] = useState([])
    const [since, setSince] = useState('')
    const [until, setUntil] = useState('')

    const dispatch = useDispatch();
    //Acciones necesarias para la validacion
    const validateForm = form => dispatch(validateFormAction(form))
    const validateSuccess = () => dispatch(validationSuccess())
    const validateError = () => dispatch(validationError())

    const changeDays = e => {
        let newDay = e.target.value

        if (e.target.checked === true) {
            setDays([...days, newDay]);
        } else {
            let newDays = [...days]
            setDays(newDays.filter( day => day !== newDay))
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        //Inicio de la validacion
        validateForm("FormSchedule")

        if (type === '' || days.length < 3) {
            //Si no pasa la validacion
            validateError()
        } else {
            //Si pasa la validacion
            validateSuccess()

            if (type === "medio") {
                setSince("8:00am")
                setUntil("12:00pm")
            }
            if (type === "completo") {
                setSince("8:00am")
                setUntil("5:00pm")
            }

            let schedule = {
                type,
                days,
                since,
                until
            }
            submit(schedule);
        }

    }

    
    return ( 
        <>
        {console.log(type)}
            <h2>Agregar el horario</h2>
            <form onSubmit={handleSubmit}>
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
                        {
                            type === "personalizar" &&
                            <>
                                <h5 className="m-4">Seleccione las Horas</h5>
                                <div className="form-row">
                                    <div className="col-3">
                                        <label className="sr-only" htmlFor="since">Desde</label>
                                        <input type="text" className="user__input" id="since" placeholder="10:00am" onChange={e => setSince(e.target.value)}/>
                                    </div>
                                    <div className="col-3">
                                        <label className="sr-only" htmlFor="until">Hasta</label>
                                        <input type="text" className="user__input" id="until" placeholder="5:00pm" onChange={e => setUntil(e.target.value)}/>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>

                { since && until}
                <button type="submit" className="btn btn-dark" >Agregar Horario</button>
            </form>

        </>
    );
}
 
export default FormSchedule;