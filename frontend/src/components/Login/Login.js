import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

//Redux
import { loginAction } from '../../store/actions/loginAction'
import { validateFormAction, validationSuccess, validationError } from '../../store/actions/validateAction'
import { useDispatch, useSelector } from 'react-redux';

const Login = ({history}) => {

    //capturar los states
    const loading = useSelector( state => state.login.loading);
    const errorLogin = useSelector( state => state.login.error);
    const errorValidate = useSelector( state => state.validate.error);

    //recoger los valores de los inputs
    const [username, saveUsername] = useState('')
    const [password, savePassword] = useState('')

    // Iniciar Sesion
    const dispatch = useDispatch();
    const login = data => dispatch(loginAction(data))
    const validateForm = () => dispatch(validateFormAction())
    const validateSuccess = () => dispatch(validationSuccess())
    const validateError = () => dispatch(validationError())

    const handleSubmitLogin = e => {
        e.preventDefault();

        validateForm();

        if(username.trim() === '' || password.trim() === '') {
            validateError();

        } else {
            validateSuccess();
            login({
                username, password
            })
        }
    }

    return ( 
        <div className="d-flex justify-content-center">
            
            <div className="login-container">
                <img src="../images/img_text.png" className="login_logo" alt="logo"/>
                <h2 className="text-center mb-5">Espacio de texto</h2>
                <form className="login-form" onSubmit={handleSubmitLogin}>
                    { errorValidate
                        ?   <div className="alert alert-danger">Los Campos deben estar llenos</div>
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
                    <h6>Espacio de texto</h6>

                    <hr/> 

                    <button type="button" className="btn btn-dark btn-block redondeado">BOTON</button>
                    <hr/>
                    <small className="">No tienes cuenta? <Link to="/access/signup">Registrate</Link></small>
                </form>
            </div>
            
        </div>      
    );

}
 
export default Login;