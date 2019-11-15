import React, { useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { recoverPassAction } from '../../store/actions/loginAction'

const RecoverPass = ({close}) => {

    const error = useSelector( state => state.login.error)
    const message = useSelector( state => state.login.message)
    const [email, saveEmail] = useState('')

    //Instacia del dispatch
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(recoverPassAction(email));
    }

    return (
        <div className="bg-popup fadein">
            <div className="popup row justify-content-center">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Reestablecer Contraseña</h5>
                        <button type="button" className="close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Ingrese su correo o usuario</label>
                                <input 
                                    type="text" 
                                    name="" 
                                    id="inputEmail" 
                                    className="form-control"
                                    placeholder="Usuario o email"
                                    value={email}
                                    onChange={ e => saveEmail(e.target.value) }
                                />
                            </div>
                            {email.length > 10
                                ?   <input type="submit" className="btn btn-dark" value="Enviar"/>
                                :   <input type="submit" disabled className="btn btn-dark" value="Enviar"/>}
                        </form>
                        <br/>
                        { error
                            ?   <div className="alert alert-danger">{error}</div>
                            :   ""
                        }
                        { message
                            ?   <div className="alert alert-danger">{error}</div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RecoverPass;