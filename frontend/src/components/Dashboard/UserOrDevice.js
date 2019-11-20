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
        // <div className="modal fade" id="modalUserOrDevice" tabIndex="-1" role="dialog" aria-labelledby="modalUserOrDevice" aria-hidden="true">
        //     <div className="modal-dialog modal-dialog-centered" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">Titulo Texto Simulado</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        //                 <div className="mb-3">
        //                     <div className="row justify-content-md-center">
        //                         <div className="col col-lg-5 d-flex flex-column align-items-center ">
        //                             <div className="border circle-userdevice">
        //                                 <Link to="/" className="circle-icon-userdevice" data-dismiss="modal" aria-label="Close">
        //                                     <FontAwesomeIcon icon={["fas", "plus"]} color="#ffffff"/>
        //                                 </Link>
        //                                 <FontAwesomeIcon icon="user" size="4x"/>
        //                             </div>
        //                             Texto Simulado
        //                         </div>
        //                         <div className="col-lg-1"></div>
        //                         <div className="col col-lg-5 d-flex flex-column align-items-center ">
        //                             <div className="border circle-userdevice">
        //                                 <Link to="/access/devices/install" className="circle-icon-userdevice">
        //                                     <FontAwesomeIcon icon={['fas', 'plus']} color="#ffffff"/>
        //                                 </Link>
        //                                 <FontAwesomeIcon icon="mobile" size="4x"/>
        //                             </div>
        //                             Texto Simulado
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Modal show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-md-center mb-3">
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            <Link to="/" className="circle-icon-userdevice">
                                <FontAwesomeIcon icon={["fas", "plus"]} color="#ffffff"/>
                            </Link>
                            <FontAwesomeIcon icon="user" size="4x"/>
                        </div>
                        Texto Simulado
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col col-lg-5 d-flex flex-column align-items-center ">
                        <div className="border circle-userdevice">
                            <Link to="/access/devices/install" className="circle-icon-userdevice">
                                <FontAwesomeIcon icon={['fas', 'plus']} color="#ffffff"/>
                            </Link>
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