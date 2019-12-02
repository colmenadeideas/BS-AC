import {
    VALIDATE_FORM_REQUEST,
    VALIDATE_FORM_SUCCESS,
    VALIDATE_FORM_ERROR
} from '../constants';

// state inicial
const initialState = {
    form: "",
    error: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case VALIDATE_FORM_REQUEST:
            return {
                ...state,
                form: action.payload,
                error: false
            }
        case VALIDATE_FORM_SUCCESS:
            return {
                ...state,
                form: "",
                error: false
            }
        case VALIDATE_FORM_ERROR:
            return {
                ...state,
                error: true
            }
        default: 
            return state
    }
}