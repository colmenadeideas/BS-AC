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

// cada reducer tiene su propio state
const initialState = {
    user: {},
    login: false,
    loading: false,
    message: false,
    error: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        //casos para el login
        case LOGIN_REQUEST:
            return {
                ...state,
                user: {},
                login: false,
                loading: true,
                error: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                login: true,
                loading: false,
                error: false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                user: {},
                login: false,
                loading: false,
                error: action.payload,
            }
        
        //casos si olvido su contrasena y quiere reestablecerla
        case RECOVER_PASS_REQUEST:
            return {
                ...state,
                login: false,
                error: false
            }
        case RECOVER_PASS_SUCCESS:
            return {
                ...state,
                message: action.payload,
                error: false
            }
        case RECOVER_PASS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

        //casos cuando quiere autenticar la contrasena una vez que recibio el correo
        case AUTHENTICATE_PASS_REQUEST:
            return {
                ...state,
                login: false,
                error: false,
            }
        case AUTHENTICATE_PASS_SUCCESS:
            return {
                ...state,
                message: action.payload,
            }
        case AUTHENTICATE_PASS_ERROR:
            return {
                ...state,
                error: action.payload
            }

        //casos para cerrar la sesion
        case LOGOUT_REQUEST:
            return {
                ...state,
                login: true,
                error: false
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                login: false,
                error: false
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                login: true,
                error: true
            }

        //por defecto devuelve el state inicial
        default:
            return state;
    }
}