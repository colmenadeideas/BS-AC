import React from 'react';
import './AddEmployee.css'
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddEmployee = () => {
    return (  
        <React.Fragment>
            <Navbar />
            <div>
                <h2>Empecemos a agregar tus empleados</h2>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="user-img">
                            <div className="user">
                                <FontAwesomeIcon icon="user" />
                            </div>
                            <div className="agregar"><FontAwesomeIcon icon="plus" /></div>
                        </div>
                        <p>Texto simulado</p>
                    </div>
                    <div className="col-7">

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default AddEmployee;