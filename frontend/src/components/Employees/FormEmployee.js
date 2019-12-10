import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const FormEmployee = ({submit, empToEdit}) => {

    //creacion de los states
    const [action, setAction] = useState('add')
    const [id, setId] = useState('')
    const [identificacion_pais, setCi] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
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
          setPhoto(reader.result)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit");

        //Inicia la validacion del formulario
        validateForm("FormEmployee")

        //modificar posteriormente las validaciones a como seran finalmente
        if(name.length < 2 || identificacion_pais.length < 2) {
            //en caso de error
            validateError();
        } else {
            //si todo sale bien
            validateSuccess();
            
            let employee = {
                photo,
                name,
                identificacion_pais, 
                position
            }

            submit(action, employee, id)
        }
    }

    useEffect(() => {
        if (empToEdit !== '' && empToEdit !== undefined) {
            setAction('edit')
            setId(empToEdit.id)
            setCi(empToEdit.ci)
            setName(empToEdit.name)
            setPhoto(empToEdit.photo)
            setPosition(empToEdit.position)
        }
    }, [empToEdit])

    return ( 
        <>
            <h2>Empecemos a agregar tus empleados</h2>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="user__file">
                            {photo 
                                ?   <img className="user-img" src={photo} alt=""/>
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
                            value={identificacion_pais}
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
                <button type="submit" className="btn btn-dark m-2"> {action === 'add' ? 'Agregar Empleado' : 'Editar Empleado' }</button>
            </form>
        </>
     );
}
 
export default FormEmployee;