import React, { useState, useEffect} from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction, authenticateError } from '../../store/actions/loginAction'

const ConfirmPass = () => {

    //crear states
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    //capturar los states del reducer
    const error = useSelector( state => state.login.error);
    //const errorValidate = useSelector( state => state.validate.error);

    const dispatch = useDispatch();

    console.log(document.location.pathname);

    const handleSubmit = (e) => {
        e.preventDefault()

        const auth = data => dispatch(authenticateAction(data))
        const authError = (error) => dispatch(authenticateError(error))
        
        if (password !== confirmPass) {
            authError('Las contrasenas deben coincidir');
        } else {
            auth({
                email,
                password
            })
        }

        //este o no correcto se limpiaran las cajas
        setPass('');
        setConfirmPass('');
        console.log(password, confirmPass);
        console.log("nueva contrasena");
    }

    useEffect(() => {
        let path = document.location.pathname
        let params = path.split("/")
        setEmail(params[2])
    }, [])
    
    return ( 
        <>
            <div className="mt-5">
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="username" value={email} />
                    <div className="form-group">
                        <label htmlFor="inputPass">Contraseña</label>
                        <input type="password" 
                            className="form-control" 
                            id="inputPass" 
                            name="password" 
                            onChange={e => setPass(e.target.value)} 
                            value={password}
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputConfirmPass">Confirmar Contraseña</label>
                        <input type="password" 
                            className="form-control" 
                            id="inputConfirmPass" 
                            onChange={e => setConfirmPass(e.target.value)} 
                            value={confirmPass}
                            placeholder="Confirmar Contraseña"
                            required
                        />
                    </div>
                    {
                        password.length <= 4
                            ?   <button type="submit" className="btn btn-primary" disabled>Enviar</button>
                            :   <button type="submit" className="btn btn-primary">Enviar</button>
                    }
                </form>
                {
                    error && <div className="alert alert-danger mt-2">{error}</div>
                }
            </div>
        </>
    );
}
 
export default ConfirmPass;