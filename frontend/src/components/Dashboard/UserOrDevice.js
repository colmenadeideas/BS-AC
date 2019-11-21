import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'react-bootstrap';


const UserOrDevice = ({modalShow}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)

    }, [modalShow])

    const handleClose = () => setShow(false);

    return ( 
        <Modal show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-md-center mb-3">
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            <Link to="/addemployee" className="circle-icon-userdevice">
                                <FontAwesomeIcon icon={["fas", "plus"]} color="#ffffff"/>
                            </Link>
                            <FontAwesomeIcon icon="user" size="4x"/>
                        </div>
                        Texto Simulado
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            {Math.floor(Math.random() * 2) === 1
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