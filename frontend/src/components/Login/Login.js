import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction'
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'

const Login = ({history}) => {

    //capturar los states
    //const loading = useSelector( state => state.login.loading);
    const errorLogin = useSelector( state => state.login.error);
    const errorValidate = useSelector( state => state.validate.error);

    //recoger los valores de los inputs
    const [username, saveUsername] = useState('')
    const [password, savePassword] = useState('')

    const dispatch = useDispatch();
    
    const handleSubmitLogin = e => {
        e.preventDefault();

        // Iniciar Sesion
        const login = data => dispatch(loginAction(data))
        const validateForm = () => dispatch(validateFormAction())
        const validateSuccess = () => dispatch(validationSuccess())
        const validateError = () => dispatch(validationError())

        //Inicia la validacion del formulario
        validateForm();

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
        <div className="d-flex justify-content-center">
            <div className="login-container">
                <img src="../images/img_test.png" className="login_logo" alt="logo"/>
                <h2 className="text-center mb-5">Espacio de texto</h2>
                <form className="login-form" onSubmit={handleSubmitLogin}>
                    { errorValidate
                        ?   <div className="alert alert-danger">Debe tener un minimo de 4 caracteres</div>
                        :   ""
                    }
                    { errorLogin
                        ?   <div className="alert alert-info">Intente de nuevo, no disponible actualmente</div>
                        :   ""
                    }
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="username" 
                            className="form-control redondeado" 
                            placeholder="Username"
                            value={username}
                            onChange={ e => saveUsername(e.target.value) }
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control redondeado" 
                            placeholder="Password"
                            value={password}
                            onChange={ e => savePassword(e.target.value) }
                        />
                    </div>

                    {  username && password 
                        ?   <button type="submit" className="btn btn-dark btn-block redondeado mb-3">BOTON LOGIN</button>
                        :   <button type="submit" disabled className="btn btn-dark btn-block redondeado mb-3">BOTON LOGIN</button>
                    }
                    <h6><Link to="/access/forgot">He olvidado mi contraseña</Link></h6>
                    <div className="or mt-4 mb-2">
                        <div className="division"></div>
                        <div className="small">or</div>
                        <div className="division"></div>
                    </div>

                    <button type="button" className="btn btn-dark btn-block redondeado">BOTON</button>
                    <hr/>
                    <small className="">No tienes cuenta? <Link to="/access/signup"><strong>Registrate</strong></Link></small>
                </form>
            </div>
            
        </div>      
    );

}
 
export default Login;