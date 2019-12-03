import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const FormEmployee = ({submit}) => {

    //creacion de los states
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [ci, setCi] = useState('')
    const [position, setPosition] = useState('')

    //state de redux
    const errorValidate = useSelector( state => state.validate.error);
    const formName = useSelector( state => state.validate.form);

    const dispatch = useDispatch();
    //Acciones necesarias para la validacion
    const validateForm = form => dispatch(validateFormAction(form))
    const validateSuccess = () => dispatch(validationSuccess())
    const validateError = () => dispatch(validationError())

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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit");

        //Inicia la validacion del formulario
        validateForm("FormEmployee")

        //modificar posteriormente las validaciones a como seran finalmente
        if(name.length < 2 || ci.length < 2) {
            //en caso de error
            validateError();
        } else {
            //si todo sale bien
            validateSuccess();
            let employee = {
                image,
                name,
                ci, 
                position
            }
            submit(employee)
        }
    }
    
    return ( 
        <>
            <h2>Empecemos a agregar tus empleados</h2>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="user__file">
                            {image 
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
                { errorValidate && formName === "FormEmployee" 
                    ?   <div className="alert alert-danger m-2">Debe tener un minimo de 2 caracteres</div> 
                    :   ""
                }
                <button type="submit" className="btn btn-dark m-2">Agregar Empleado</button>
            </form>
        </>
     );
}
 
export default FormEmployee;