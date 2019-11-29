import React, { useState } from 'react';
//import { Link } from 'react-router-dom'
import './AddEmployee.css'
import Navbar from '../Navbar/Navbar'
import AddSchedule from './AddSchedule'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeAction } from '../../store/actions/employeesAction'
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const AddEmployee = ({history}) => {

    //creacion de los states
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [ci, setCi] = useState('')
    const [position, setPosition] = useState('')

    //state de redux
    const errorValidate = useSelector( state => state.validate.error);

    const dispatch = useDispatch();

    const previewFile = () => {
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            //console.log(reader)
        }
        reader.onloadend = function () {
          setImage(reader.result)
        }
    }

    const handleSubmitEmp = (e) => {
        e.preventDefault()
        console.log("submit");
        
        //Acciones necesarias para el login
        const addEmployee = data => dispatch(addEmployeeAction(data))
        const validateForm = () => dispatch(validateFormAction())
        const validateSuccess = () => dispatch(validationSuccess())
        const validateError = () => dispatch(validationError())

         //Inicia la validacion del formulario
         validateForm();

         //modificar posteriormente las validaciones a como seran finalmente
         if(name.length < 2 || ci.length < 2) {
             //en caso de error
             validateError();
         } else {
             //si todo sale bien
             validateSuccess();
             addEmployee({
                 image,
                 name,
                 ci, 
                 position
             })
         }
    }

    return (  
        <React.Fragment>
            <Navbar />
            <div>
                <h2>Empecemos a agregar tus empleados</h2>
                <form onSubmit={handleSubmitEmp}>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <div className="user__file">
                                {
                                    image 
                                        ?   <img className="user-img" src={image} alt=""/>
                                        :   <>
                                                <div className="user-icon">
                                                    <FontAwesomeIcon icon="user" />
                                                </div>
                                                <input 
                                                    type="file" 
                                                    className="input-image" 
                                                    id="fileImage" 
                                                    //value={image}
                                                    onChange={previewFile}
                                                    required
                                                />
                                                <label className="agregar" htmlFor="fileImage"><FontAwesomeIcon icon="plus" /></label>
                                            </>
                                }
                            </div>
                            <p>Texto simulado</p>
                        </div>
                        <div className="col-7">
                            <input 
                                type="text"
                                className="user__input"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Nombre y apellido" 
                                required
                            />
                            <input 
                                type="text" 
                                className="user__input"
                                value={ci}
                                onChange={e => setCi(e.target.value)}
                                placeholder="Cedula" 
                                required
                            />
                            <input 
                                type="text" 
                                className="user__input"
                                value={position}
                                onChange={e => setPosition(e.target.value)}
                                placeholder="Cargo" 
                                required
                            />
                        </div>
                    </div>
                    { errorValidate && <div className="alert alert-danger m-2">Debe tener un minimo de 6 caracteres</div> }
                    <button type="submit" className="btn btn-dark m-2">Agregar Empleado</button>
                </form>
                <AddSchedule />
            </div>
        </React.Fragment>
    );
}
 
export default AddEmployee;