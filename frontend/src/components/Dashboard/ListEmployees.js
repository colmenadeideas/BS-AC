import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListEmployees = ({history, employees}) => {

    return ( 
        <>
            <ul className="list-group mb-2">
                <li className="list-group-item list-group-item-dark">
                    Lista de Empleados
                </li>
                {employees.map((emp, i) => (
                    <li className="list-group-item list-group-item-action" key={i}>
                        <div className="row">
                            <div className="col-md-9">
                                {emp.name}
                            </div>
                            <div className="col-md-3">
                            <Link to={{pathname: 'employee', state: {"empToEdit": emp} }} className="btn btn-sm"><FontAwesomeIcon icon="edit"/></Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <small>Direccion IP: 123.123.123.123</small>
        </>
    );
}
 
export default ListEmployees;