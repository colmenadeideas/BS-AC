import React, { /*useState,*/ useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getDevicesAction, deleteDeviceAction } from '../../store/actions/devicesAction'

const Devices = () => {

    //obtengo los estado de devicesReducer
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
                dispatch( deleteDeviceAction(id) )
            }
        })
    }

    const handleView = (id) => {
        console.log(id);
    }

    useEffect(() => {
        console.log(devices);

        dispatch( getDevicesAction() )
    }/*, [devices]*/); //agregar el parametro hace que a menos que el valor de este cambie, no se volvera a ejecutar

    return ( 
        <>
            <Navbar />
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
                            <button className="button-a" onClick={() => handleView(1)}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(1)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>11.38.2.27</td>
                        <td>24/08/2018</td>
                        <td>Android 4.2</td>
                        <td>
                            <button className="button-a" onClick={() => handleView(2)}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(2)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>112.190.232.194</td>
                        <td>06/01/2019</td>
                        <td>iOS 6.0</td>
                        <td>
                            <button className="button-a" onClick={() => handleView(3)}> <FontAwesomeIcon icon="eye"/></button>{' '}
                            <button className="button-a" onClick={() => handleDelete(3)}> <FontAwesomeIcon icon="trash"/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default Devices;