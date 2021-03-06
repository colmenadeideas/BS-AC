import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'react-bootstrap';

const UserOrDevice = ({employees, devices}) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    //console.log(employees.length);

    return ( 
        <Modal show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-md-center mb-3">
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            {employees <= 0
                                ?   <Link to="/Employee" className="circle-icon-userdevice">
                                        <FontAwesomeIcon icon={["fas", "plus"]} color="#ffffff"/>
                                    </Link>
                                :   <div className="circle-icon-userdevice">
                                        <FontAwesomeIcon icon={['fas', 'check']} color="#ffffff"/>
                                    </div>
                            }
                            <FontAwesomeIcon icon="user" size="4x"/>
                        </div>
                        Texto Simulado
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            {devices <= 0
                                ?   <Link to="/devices/install" className="circle-icon-userdevice">
                                        <FontAwesomeIcon icon={['fas', 'plus']} color="#ffffff"/>
                                    </Link>
                                :   <div className="circle-icon-userdevice">
                                        <FontAwesomeIcon icon={['fas', 'check']} color="#ffffff"/>
                                    </div>
                            }
                            
                            <FontAwesomeIcon icon="mobile" size="4x"/>
                        </div>
                        Texto Simulado
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    );
}
 
export default UserOrDevice;