import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { recoverPassAction } from '../../store/actions/loginAction'

const RecoverPass = ({show, close}) => {

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
        <Modal show={show} onHide={close} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>Reestablecer Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Ingrese su correo o usuario</label>
                        <input 
                            type="text" 
                            name="email" 
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
            </Modal.Body>
        </Modal>
    );
}
 
export default RecoverPass;