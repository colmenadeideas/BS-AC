import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import RecoverPass from './RecoverPass'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction'
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const Login = ({history}) => {
    //recoger los valores de los inputs y los mete en un state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);

    //capturar los states del reducer
    const loginState = useSelector( state => state.login.login);
    const errorLogin = useSelector( state => state.login.error);
    const errorValidate = useSelector( state => state.validate.error);
    const formName = useSelector( state => state.validate.form);

    const dispatch = useDispatch();

    //nuevas formas del modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handleSubmitLogin = e => {
        e.preventDefault();

        //Acciones necesarias para el login
        const login = data => dispatch(loginAction(data))
        const validateForm = () => dispatch(validateFormAction())
        const validateSuccess = () => dispatch(validationSuccess())
        const validateError = () => dispatch(validationError())

        //Inicia la validacion del formulario
        validateForm("FormLogin");

        if(username.length < 4 || password.length < 4) {
            //en caso de error
            validateError();
        } else {
            //si todo sale bien
            validateSuccess();
            login({
                username, password
            })
        }
    }

    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <div className="login-container">
                    <img src="/images/img_test.png" className="login_logo" alt="logo"/>
                    <h2 className="text-center mb-5">Espacio de texto</h2>
                    <form className="login-form" onSubmit={handleSubmitLogin}>
                        {/* si hay error de validacion */}
                        { errorValidate && formName === "FormLogin"
                            ?   <div className="alert alert-danger">Debe tener un minimo de 4 caracteres</div>
                            :   ""
                        }
                        {/* si hay error con la informacion de la API */}
                        { errorLogin
                            ?   <div className="alert alert-info">{errorLogin}</div>
                            :   ""
                        }
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="username" 
                                className="form-control redondeado" 
                                placeholder="Username"
                                value={username}
                                onChange={ e => setUsername(e.target.value) }
                                />
                        </div>
                        <div className="form-group mb-4">
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control redondeado" 
                                placeholder="Password"
                                value={password}
                                onChange={ e => setPassword(e.target.value) }
                                />
                        </div>

                        {/* solo se habilitara el boton si hay datos en los campos y si no se ha pulsado previamente */}
                        {  username && password && !loginState
                            ?   <button type="submit" className="btn btn-dark btn-block redondeado mb-3">BOTON LOGIN</button>
                            :   <button type="submit" disabled className="btn btn-dark btn-block redondeado mb-3">BOTON LOGIN</button>
                        }
                    </form>
                    <button onClick={handleShow} className="button-a">He olvidado mi contraseña</button>
                    <div className="or mt-4 mb-2">
                        <div className="division"></div>
                        <div className="small">or</div>
                        <div className="division"></div>
                    </div>

                    <button type="button" className="btn btn-dark btn-block redondeado">BOTON</button>
                    <hr/>
                    <small className="">No tienes cuenta? <Link to="/signup"><strong>Registrate</strong></Link></small>
                </div>
            </div>
            {/* si la informacion es correcta loginState sera true y pasara al dashboard */}
            {loginState 
                ?   history.push('/dashboard') 
                :   ""
            }

            <RecoverPass 
                show={show} 
                close={handleClose}
            /> 
   
        </React.Fragment>
    );

}
 
export default Login;