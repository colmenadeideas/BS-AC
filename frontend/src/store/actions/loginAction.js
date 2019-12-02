import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    RECOVER_PASS_REQUEST,
    RECOVER_PASS_SUCCESS,
    RECOVER_PASS_ERROR,

    AUTHENTICATE_PASS_REQUEST,
    AUTHENTICATE_PASS_SUCCESS,
    AUTHENTICATE_PASS_ERROR,
    
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants'

import axiosClient from '../../helpers/axios';
import history from '../../helpers/history';
//import Swal from 'sweetalert2';

// Hacer Login
export function loginAction(data) {
    return (dispatch) => {
        dispatch( loginRequest() );

        // Enviar a la API
        axiosClient.post('account/login', data )
            .then(response => {
                console.log(response.data['success']);
                // Si se inserta correctamente
                if (response.data['success'] === 1) {
                    dispatch( loginSuccess(data) );
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


//Solicitar el reestablecimiento de contrasena
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
export const recoverPassSuccess = data => ({
    type: RECOVER_PASS_SUCCESS,
    payload: data
})
export const recoverPassError = error => ({
    type: RECOVER_PASS_ERROR,
    payload: error
})

// Hacer el reestablecimiento de la contrasena
export function authenticateAction(data) {
    return (dispatch) => {
        dispatch( authenticateRequest() );

        // Enviar en la API
        axiosClient.post('account/update/password', data )
            .then(response => {
                console.log(response.data);
                // Si se inserta correctamente
                if (response.data['success'] === 1) {
                    dispatch( authenticateSuccess("Contrasena reestablecida correctacmente") );
                } else {
                    dispatch(authenticateError("No se ha podido reestablecer la contrasena"));
                }
            })
            .catch(error => {
                console.log(error);
                // Si  hay un error
                dispatch(loginError("Intente de nuevo, no disponible actualmente"));
            })
    }
}
export const authenticateRequest = () => ({
    type: AUTHENTICATE_PASS_REQUEST
});
export const authenticateSuccess = data => ({
    type: AUTHENTICATE_PASS_SUCCESS,
    payload: data
})
export const authenticateError = error => ({
    type: AUTHENTICATE_PASS_ERROR,
    payload: error
})

//cerrar la sesion
export function logoutAction() {
    return (dispatch) => {
        dispatch( logoutRequest() );

        // Enviar a la API
        axiosClient.post('account/logout')
            .then(response => {
                console.log(response.data['success']);
                // Si se cierra correctamente la sesion
                if (response.data['success'] === 1) {
                    dispatch( logoutSuccess() );

                } else {
                    dispatch(logoutError("No se ha podido cerrar su sesion"));
                }
            })
            .catch(error => {
                console.log(error);
                // Si hay un error
                dispatch(logoutError("Intente de nuevo, no disponible actualmente"));
            })
        return 1;
    }
}
export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});
export const logoutError = error => ({
    type: LOGOUT_ERROR,
    payload: error
})

    