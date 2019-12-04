import React, { useState, useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const FormSchedule = ({submit, scheToEdit}) => {

    //crecaion de los states
    const [action, setAction] = useState('add')
    const [id, setId] = useState('')
    const [type, setType] = useState('')
    const [days, setDays] = useState([])
    const [since, setSince] = useState('')
    const [until, setUntil] = useState('')

    //states para marcar o desmacar casillas
    const initialStateTypeCheck = {
        type1: false, type2: false, type3: false
    }
    const [typeCheck, setTypeCheck] = useState(initialStateTypeCheck)
    const [daysCheck, setDaysCheck] = useState({
        day1: false, day2: false, day3: false,
        day4: false, day5: false, day6: false,
        day7: false
    })
    const week = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

    //states de redux
    const errorValidate = useSelector( state => state.validate.error);
    const formName = useSelector( state => state.validate.form);

    const dispatch = useDispatch();
    //Acciones necesarias para la validacion
    const validateForm = form => dispatch(validateFormAction(form))
    const validateSuccess = () => dispatch(validationSuccess())
    const validateError = () => dispatch(validationError())

    const changeType = e => {
        setType(e.target.value)

        let tCheck = initialStateTypeCheck
        tCheck[e.target.id] = true
        setTypeCheck(tCheck)
    }
    const changeDays = e => {
        let newDay = e.target.value
        let nameDay = e.target.id
        
        if (e.target.checked === true) {
            //si se esta marcando lo agrega al state de dias
            setDays([...days, newDay])
        } else {
            //si se esta desmarcando lo elimina del state
            let newDays = [...days]
            setDays(newDays.filter( day => day !== newDay))
        }
        //lo marca en el state como check true o false segun sea el caso
        let dCheck = daysCheck
        dCheck[nameDay] = e.target.checked
        setDaysCheck(dCheck)
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
            let schedule = {
                type,
                days,
                since,
                until
            }
            submit(action, schedule, id);
        }
    }

    // se usa como un componentDidMount para setear los valores a los inputs en caso de que haya data para editar
    useEffect(() => {
        if (scheToEdit !== '' && scheToEdit !== undefined) {
            setAction('edit')
            setId(scheToEdit.id)
            setType(scheToEdit.type)
            let tCheck = typeCheck;
            switch (scheToEdit.type) {
                case 'medio':
                    tCheck['type1'] = true
                    break;
                case 'completo':
                    tCheck['type2'] = true
                    break;
                default:
                    tCheck['type3'] = true
                    setSince(scheToEdit.since)
                    setUntil(scheToEdit.until)
                    break;
            }
            setTypeCheck(tCheck)
            setDays(scheToEdit.days)
            week.map((dayW, i) => {
                i++
                let day = scheToEdit.days.filter(dayS => dayS === dayW)
                let name = "day"+i

                let dCheck = daysCheck
                if (day.length > 0) {
                    dCheck[name] = true
                }
                return (setDaysCheck(dCheck))
            })
        }
    // eslint-disable-next-line
    }, [scheToEdit])

    // se usa como un componentDidUpdate para seteando los valores al state solo en caso de que cambie el tipo de horario
    useEffect(() => {
        if (type === "medio") {
            setSince("8:00am"); setUntil("12:00pm")
        } 
        if (type === "completo") {
            setSince("8:00am"); setUntil("5:00pm")
        }
    }, [type])
    
    return ( 
        <>
            <h2>Agregar el horario</h2>
            <form onSubmit={handleSubmit}>
                {/* radios */}
                <div className="row justify-content-center">
                    <div className="col-9">
                        <h5 className="m-4">Tipo de Horario</h5>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type1" value="medio" checked={typeCheck.type1} onChange={changeType}/>
                            <label className="form-check-label" htmlFor="type1">
                                Medio
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type2" value="completo" checked={typeCheck.type2} onChange={changeType}/>
                            <label className="form-check-label" htmlFor="type2">
                                Completo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="typeSchedule" id="type3" value="personalizar" checked={typeCheck.type3} onChange={changeType}/>
                            <label className="form-check-label" htmlFor="type3">
                                Personalizar
                            </label>
                        </div>
                        <br/><br/>

                        {/* checkboxes */}
                        <h5 className="m-4">Seleccione los Dias</h5>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day1" value="lunes" checked={daysCheck.day1} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day1">Lunes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day2" value="martes" checked={daysCheck.day2} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day2">Martes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day3" value="miercoles" checked={daysCheck.day3} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day3">Miercoles</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day4" value="jueves" checked={daysCheck.day4} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day4">Jueves</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day5" value="viernes" checked={daysCheck.day5} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day5">Viernes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day6" value="sabado" checked={daysCheck.day6} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day6">Sabado</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="day7" value="domingo" checked={daysCheck.day7} onChange={changeDays}/>
                            <label className="form-check-label" htmlFor="day7">Domingo</label>
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
                                        <input type="text" className="user__input" id="since" placeholder="10:00am" defaultValue={since} onChange={e => setSince(e.target.value)} required/>
                                    </div>
                                    <div className="col-3">
                                        <label className="sr-only" htmlFor="until">Hasta</label>
                                        <input type="text" className="user__input" id="until" placeholder="5:00pm" defaultValue={until} onChange={e => setUntil(e.target.value)} required/>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>

                { errorValidate && formName 
                    ? <div className="alert alert-danger m-2">Debe seleccionar al menos tres dias e indicar el tiempo</div>
                    : ""
                }
                <button type="submit" className="btn btn-dark" >Agregar Horario</button>
            </form>

        </>
    );
}
 
export default FormSchedule;