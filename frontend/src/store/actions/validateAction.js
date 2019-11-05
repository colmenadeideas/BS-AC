import {
    VALIDATE_FORM_REQUEST,
    VALIDATE_FORM_SUCCESS,
    VALIDATE_FORM_ERROR
} from '../constants';

export function validateFormAction(){
    return dispatch => {
        dispatch( initValidation() )
    }
}


export const initValidation = () => {
    return {
        type: VALIDATE_FORM_REQUEST
    }
}
export const validationSuccess = () => {
    return {
        type: VALIDATE_FORM_SUCCESS
    }
}
export const validationError = () => {
    return {
        type: VALIDATE_FORM_ERROR   
    }
}