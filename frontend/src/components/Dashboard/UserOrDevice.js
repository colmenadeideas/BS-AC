import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const UserOrDevice = () => {
    return ( 
        <div className="modal fade" id="modalUserOrDevice" tabIndex="-1" role="dialog" aria-labelledby="modalUserOrDevice" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Titulo Texto Simulado</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container mb-3">
                            <div className="row justify-content-md-center">
                                <div className="col col-lg-5 d-flex flex-column align-items-center ">
                                    <div className="border circle-userdevice">
                                        <Link to="/" className="circle-icon-userdevice" data-dismiss="modal" aria-label="Close">
                                            <FontAwesomeIcon icon={["fas", "plus"]} color="#ffffff"/>
                                        </Link>
                                        <FontAwesomeIcon icon="user" size="4x"/>
                                    </div>
                                    Texto Simulado
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col col-lg-5 d-flex flex-column align-items-center ">
                                    <div className="border circle-userdevice">
                                        <Link to="/access/devices/install" className="circle-icon-userdevice" data-dismiss="modal">
                                            <FontAwesomeIcon icon={['fas', 'plus']} color="#ffffff"/>
                                        </Link>
                                        <FontAwesomeIcon icon="mobile" size="4x"/>
                                    </div>
                                    Texto Simulado
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default UserOrDevice;