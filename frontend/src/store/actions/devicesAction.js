import {
    GET_DEVICES_REQUEST,
    GET_DEVICES_SUCCESS,
    GET_DEVICES_ERROR,

    GET_DEVICE_DETAILS_REQUEST,
    GET_DEVICE_DETAILS_SUCCESS,
    GET_DEVICE_DETAILS_ERROR,
    
    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_SUCCESS,
    DELETE_DEVICE_ERROR
} from '../constants'

import axiosClient from '../../helpers/axios';
import Swal from 'sweetalert2';

// Tarer la todos los dispositivos asociados a la cuenta
export function getDevicesAction(data) {
    return (dispatch) => {
        dispatch( getDevicesRequest() );

        // Peticion a la API
        axiosClient.get('/' )
            .then(response => {
                console.log(response);
                // Si trae la informacion correctamente
                dispatch( getDevicesSuccess(data) );
            })
            .catch(error => {
                console.log(error);
                // Si hay un error
                dispatch( getDevicesError(error));
            })
    }
}
export const getDevicesRequest = () => ({
    type: GET_DEVICES_REQUEST
})
export const getDevicesSuccess = data => ({
    type: GET_DEVICES_SUCCESS,
    payload: data
})
export const  getDevicesError = () => ({
    type: GET_DEVICES_ERROR,
})

// Solicitar el dispositivo seleccionado
export function getDeviceDetailAction(id) {
    return (dispatch) => {
        dispatch( getDeviceDetailRequest() )

        dispatch( getDeviceDetailSuccess(id) );
        dispatch( getDeviceDetailError() )
    }
}
export const getDeviceDetailRequest = () => ({
    type: GET_DEVICE_DETAILS_REQUEST
})
export const getDeviceDetailSuccess = id => ({
    type: GET_DEVICE_DETAILS_SUCCESS,
    payload: id
})
export const getDeviceDetailError = () => ({
    type:   GET_DEVICE_DETAILS_ERROR
})

// Eliminar el dispositivo seleccionado
export function deleteDeviceAction(id) {
    return (dispatch) => {
        dispatch( deleteDeviceRequest() )

        //Peticion de Elminar a la API
        axiosClient.delete('/', id)
            .then(response => {
                console.log(response);
                //si se elimino correctamente
                dispatch( deleteDeviceSuccess(id) );
                Swal.fire(
                    'Borrado!',
                    'El dispositivo fue eliminado',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);

                dispatch( deleteDeviceError(error) )
            })
    }
}
export const deleteDeviceRequest = () => ({
    type: DELETE_DEVICE_REQUEST
})
export const deleteDeviceSuccess = id => ({
    type: DELETE_DEVICE_SUCCESS,
    payload: id
})
export const deleteDeviceError = () => ({
    type:   DELETE_DEVICE_ERROR
})
