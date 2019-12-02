import React from 'react';
import { Link } from 'react-router-dom'
// import history from '../../helpers/history'
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/loginAction'

const Navbar = ({history}) => {

    const dispatch = useDispatch();

    const handleLogout = () => {

        Swal.fire({
            title: '¿Está seguro?',
            text: "Su sesion se cerrará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar sesion',
            cancelButtonText: 'Continuar'
        }).then((result) => {
            if (result.value) {
                let res = dispatch(logoutAction());
                if (res === 1) {
                    history.push('/logout');  
                }
            }
        })
    }

    return (
        <div className="header-dashboard">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/devices">Dispositivos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Link</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link button-a" onClick={handleLogout}>Cerrar Sesion</button>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown alert-active">
                                <Link className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    <div className="alert-bell">
                                        <div className="alert-note text-white px-2">1</div><FontAwesomeIcon icon="bell"  style={{ 'color': 'white' }} />    
                                    </div>
                                    
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item alert-success" to="/">Dispositivo registrado con exito</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div className="mt-5"></div>
        </div>
    );
}

export default Navbar;