import {
    GET_DEVICES_REQUEST,
    GET_DEVICES_SUCCESS,
    GET_DEVICES_ERROR,

    // GET_DEVICE_DETAILS_REQUEST,
    // GET_DEVICE_DETAILS_SUCCESS,
    // GET_DEVICE_DETAILS_ERROR,

    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_SUCCESS,
    DELETE_DEVICE_ERROR
} from '../constants'

// state inicial para el modulo devices
const initialState = {
    devices: [],
    device: {},
    error: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        //obtener los dispositivos registrados
        case GET_DEVICES_REQUEST:
            return {
                ...state,
                error: false,
            }
        case GET_DEVICES_SUCCESS:
            return {
                ...state,
                error: false,
                devices: action.payload
            }
        case GET_DEVICES_ERROR:
            return {
                ...state,
                error: true,
            }

        //eliminar un dispositivo
        case DELETE_DEVICE_REQUEST:
            return {
                ...state,
                error: false,
            }
        case DELETE_DEVICE_SUCCESS:
            return {
                ...state,
                error: false,
                devices: state.devices.filter( device => device.id !== action.payload )
            }
        case DELETE_DEVICE_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}