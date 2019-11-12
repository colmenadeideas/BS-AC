import {
    DEVICE_REGISTER_REQUEST,
    DEVICE_REGISTER_SUCCESS,
    DEVICE_REGISTER_ERROR
} from '../constants'

import axiosClient from '../../helpers/axios';

// Registrar dispositivo
export function registerDeviceAction(data) {
    return (dispatch) => {
        dispatch( deviceRegisterRequest() );

        // Insertar en la API
        axiosClient.post('/', data )
            .then(response => {
                console.log(response);
                // Si se inserta correctamente
                dispatch( deviceRegisterSuccess(data) );
                //history.push('/')
            })
            .catch(error => {
                console.log(error);
                // Si  hay un error
                dispatch( deviceRegisterError(error));
            })
    }
}

export const deviceRegisterRequest = () => ({
    type: DEVICE_REGISTER_REQUEST
});

export const deviceRegisterSuccess = data => ({
    type: DEVICE_REGISTER_SUCCESS,
    payload: data
})

export const  deviceRegisterError = () => ({
    type: DEVICE_REGISTER_ERROR,
})