import React from 'react';
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DeviceView = ({device, show, handleClose, handleDelete}) => {
    const { id, ip, timestamp, so } = device;;;;
    return ( 
        <>
            <Modal show={show} onHide={handleClose} animation={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del dipositivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row justify-content-md-center mb-3">
                        <div className="col col-lg-5">
                            <h5>
                                IP <br/>
                                Fecha <br/>
                                Sistema Operativo
                            </h5>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col col-lg-5 d-flex">
                            <p>
                                {ip} <br/>
                                {timestamp} <br/>
                                {so}
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <div className=""><button className="button-a" onClick={() => handleDelete(id)}> <FontAwesomeIcon icon="trash"/></button></div>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default DeviceView;