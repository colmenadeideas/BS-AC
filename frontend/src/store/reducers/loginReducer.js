import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../constants'

// cada reducer tiene su propio state
const initialState = {
    user: {},
    loading: false,
    error: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                user: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}