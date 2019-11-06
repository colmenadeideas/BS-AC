import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../constants'

import axiosClient from '../../helpers/axios';
import history from '../../helpers/history';
//import Swal from 'sweetalert2';

// Hacer Login
export function loginAction(data) {
    return (dispatch) => {
        dispatch( loginRequest() );

        // Insertar en la API
        axiosClient.post('/', data )
            .then(response => {
                console.log(response);
                // Si se inserta correctamente
                dispatch( loginSuccess(data) );
                history.push('/access/dashboard')
            })
            .catch(error => {
                console.log(error);
                // Si  hay un error
                dispatch( loginError(error));
            })
    }
}

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error
})