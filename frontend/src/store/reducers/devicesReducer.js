import {
    DEVICE_REGISTER_REQUEST,
    DEVICE_REGISTER_SUCCESS,
    DEVICE_REGISTER_ERROR
} from '../constants'

// state inicial para el modulo devices
const initialState = {
    device: {},
    error: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DEVICE_REGISTER_REQUEST:
            return {
                ...state,
                error: false,
            }
        case DEVICE_REGISTER_SUCCESS:
            return {
                ...state,
                error: false,
                device: action.payload
            }
        case DEVICE_REGISTER_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}