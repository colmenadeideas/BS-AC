import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    RECOVER_PASS_REQUEST,
    RECOVER_PASS_CANCEL,
    RECOVER_PASS_SUCCESS,
    RECOVER_PASS_ERROR,
} from '../constants'

import axiosClient from '../../helpers/axios';
//import history from '../../helpers/history';
//import Swal from 'sweetalert2';

// Hacer Login
export function loginAction(data) {
    return (dispatch) => {
        dispatch( loginRequest() );

        // Insertar en la API
        axiosClient.post('account/login', data )
            .then(response => {
                console.log(response.data['success']);
                // Si se inserta correctamente
                if (response.data['success'] === 1) {
                    dispatch( loginSuccess("Hemos enviado un correo para reestablecer su contrasena") );
                } else {
                    dispatch(loginError("Datos Incorrectos"));
                }
            })
            .catch(error => {
                console.log(error);
                // Si  hay un error
                dispatch(loginError("Intente de nuevo, no disponible actualmente"));
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


//Hacer el reestablecimiento de contrasena
export function recoverPassAction(email) {
    return (dispatch) => {
        dispatch( recoverPassRequest() )
        console.log(email);
        //enviar email a la API
        axiosClient.post('account/recover', { email } )
            .then(response => {
                console.log(response);
                // Si se envia correctamente
                if (response.data['success'] === 1) {
                    dispatch( recoverPassSuccess("Hemos enviado un mensaje a tu correo con las instrucciones para el reestablecimiento") );
                } else {
                    dispatch( recoverPassError("Intente de nuevo, no disponible actualmente") );
                }
            })
            .catch(error => {
                console.log(error);
                // Si hay un error
                dispatch( recoverPassError("Intente de nuevo, no disponible actualmente") );
            })
    }
}
export const recoverPassRequest = () => ({
    type: RECOVER_PASS_REQUEST
});

export const recoverPassCancel = () => ({
    type: RECOVER_PASS_CANCEL
})

export const recoverPassSuccess = data => ({
    type: RECOVER_PASS_SUCCESS,
    payload: data
})

export const recoverPassError = error => ({
    type: RECOVER_PASS_ERROR,
    payload: error
})
