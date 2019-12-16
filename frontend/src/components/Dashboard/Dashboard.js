import React, { useEffect} from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../Navbar/Navbar';
import UserOrDevice from './UserOrDevice';
import ListEmployees from './ListEmployees'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAction } from '../../store/actions/employeesAction'
import { getDevicesAction } from '../../store/actions/devicesAction'

const Dashboard = ({history}) => {

    //state redux
    const employees = useSelector( state => state.employees.employees);
    const devices = useSelector( state => state.devices.devices);

    const countEmployees = employees.length
    const countDevices = devices.length

    //console.log(devices);
    const dispatch = useDispatch();

    // consulta a la API los empleados y dispositivos (simula un componentDidMount)
    useEffect(() => {
        dispatch( getEmployeesAction())
        dispatch( getDevicesAction() )
    }, [dispatch])


    return ( 
        <React.Fragment>
            <Navbar history={history} />
            <div className=""></div>
            <div className="row">
                {/* textos superiores*/}
                <div className="col-md-12">
                    <h2>Bienvenido</h2>
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
                    <ListEmployees employees={employees} history={history}/>
                </div>
                {/* fin columna 1 */}

                {/* columna 2 */}    
                <div className="col-md-6">
                    <div className="border border-dark row">
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
                    <div className="mt-3 row">
                        <textarea name="notes" id="notes" cols="60" rows="4" placeholder="Espacio de anotaciones"></textarea>
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
                        <Link to="/carnet/preview" className="rounded-circle bg-dark mt-2" style={{height: "70px", width: "70px"}}>
                        
                        </Link>
                    </div>
                </div>
                {/* columna 3 */}
            </div>
            { (countEmployees <= 0 || countDevices <= 0) && <UserOrDevice employees={countEmployees} devices={countDevices} /> }

        </React.Fragment>
     );
}
 
export default Dashboard;