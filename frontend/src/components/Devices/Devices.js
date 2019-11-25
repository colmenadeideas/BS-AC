import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar'
import DeviceView from './DeviceView'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getDevicesAction, deleteDeviceAction } from '../../store/actions/devicesAction'

//todos los componentes que llaman al Navbar deben llamar a history y pasarselo como prop
const Devices = ({history}) => {

    //states
    const [show, setShow] = useState(false);
    const [deviceShow, setDeviceShow] = useState({});

    //state de devicesReducer
    const devices = useSelector( state => state.devices.devices);
    
    const dispatch = useDispatch();

    //se ejecuta cuando hace click a la papelera y llama a la accion eliminar
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Esta Seguro?',
            text: "Este dispositivo se eliminara",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.value) {
                handleClose()
                dispatch( deleteDeviceAction(id) )
            }
        })
    }

    const handleView = (device) => {
        setShow(true);
        setDeviceShow(device)
        console.log(device);
    }
    const handleClose = () => setShow(false);

    useEffect(() => {
        console.log(devices);

        dispatch( getDevicesAction() )
    }/*, [devices]*/); //agregar el parametro hace que a menos que el valor de este cambie, no se volvera a ejecutar

    return ( 
        <>

            <Navbar history={history}/>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IP</th>
                        <th scope="col">Inicio de Sesion</th>
                        <th scope="col">SO</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>26.51.129.136</td>
                        <td>10/11/2019</td>
                        <td>Android 8.1</td>
                        <td>
                            <button className="button-a" onClick={() => handleView({"id": 1, "ip": '26.51.129.136', "timestamp": '10/11/2019', "so": 'Android 8.1'})}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(1)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>11.38.2.27</td>
                        <td>24/08/2018</td>
                        <td>Android 4.2</td>
                        <td>
                            <button className="button-a" onClick={() => handleView({"id": 2, "ip": '11.38.2.27', "timestamp": '24/08/2018', "so": 'Android 4.2'})}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(2)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>112.190.232.194</td>
                        <td>06/01/2019</td>
                        <td>iOS 6.0</td>
                        <td>
                            <button className="button-a" onClick={() => handleView({"id": 3, "ip": '112.190.232.194', "timestamp": '06/01/2019', "so": 'iOS 6.0'})}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(3)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {
                <DeviceView 
                    device={deviceShow}
                    show={show}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                />
            }
        </>
     );
}
 
export default Devices;