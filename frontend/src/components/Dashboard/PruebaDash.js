import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PreNavbar from '../Navbar/PreNavbar';
import UserOrDevice from './UserOrDevice';

const PruebaDash = () => {

    return ( 
        <React.Fragment>
            <PreNavbar />
            <div className="mt-5"></div>
            <div className="row">
                {/* textos superiores*/}
                <div className="col-md-12">
                    <h2>Bienvenido</h2>
                    <button className="btn btn-dark" data-toggle="modal" data-target="#modalUserOrDevice">Abrir Popup</button>
                </div>
                <div className="col-md-12 mb-3">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-2">
                            <span className="badge badge-pill badge-primary">.</span>{' '}Texto
                        </div>
                        <div className="col-md-2">
                            <span className="badge badge-pill badge-dark">.</span>{' '}Texto
                        </div>
                    </div>
                </div>

                {/* division en tres columnas */}
                {/* columna 1 */}
                <div className="col-md-3">
                    
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-dark">
                            Lista de Empleados
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col-md-9">
                                    Dapibus facilisis
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-sm"><FontAwesomeIcon icon="bars"/></button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col-md-9">
                                    Morbi leo
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-sm"><FontAwesomeIcon icon="bars"/></button> 
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col-md-9">
                                    Porta consectetur
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-sm"><FontAwesomeIcon icon="bars"/></button> 
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col-md-9">
                                    Vestibulum eros
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-sm"><FontAwesomeIcon icon="bars"/></button> 
                                </div>
                            </div>
                        </li>
                    </ul>
                    <small>Direccion IP: 123.123.123.123</small>
                </div>
                {/* fin columna 1 */}

                {/* columna 2 */}    
                <div className="col-md-6">
                    
                    <div className="row">
                        <div className="border border-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12"> <p className="h5 mt-2">TEXTO SIMULADO</p></div>
                                    <br/><br/>
                                    <div className="col-md-12">
                                        1 <br/>
                                        2 <br/>
                                        3 <br/>
                                        4 <br/>
                                        5 <br/>
        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 pl-4"></div>
                                        <div className="col-md-2">texto</div>
                                        <div className="col-md-2">texto</div>
                                        <div className="col-md-2">texto</div>
                                        <div className="col-md-2">texto</div>
                                        <div className="col-md-2">texto</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 row">
                        <textarea name="notes" id="notes" cols="60" rows="4" defaultValue="Espacio de anotaciones"></textarea>
                    </div>
                </div>
                {/* fin columna 2 */}

                {/* columna 3 */}
                <div className="col-md-3 text-center">
                    <div className="w-100 border border-dark" style={{height: "195px"}}>
                        calendario
                    </div>
                    <div className="mt-2 d-flex flex-column align-items-center">
                        <small>Crear codigo QR</small>
                        <div className="rounded-circle bg-dark mt-2" style={{height: "70px", width: "70px"}}>
                    </div>
                    </div>
                </div>
                {/* columna 3 */}
            </div>
            <UserOrDevice />
   
            
        </React.Fragment>
     );
}
 
export default PruebaDash;