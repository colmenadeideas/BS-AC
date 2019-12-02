import {
    VALIDATE_FORM_REQUEST,
    VALIDATE_FORM_SUCCESS,
    VALIDATE_FORM_ERROR
} from '../constants';

export function validateFormAction(form){
    return dispatch => {
        console.log(form);
        dispatch( initValidation(form) )
    }
}

export const initValidation = (form) => {
    return {
        type: VALIDATE_FORM_REQUEST,
        payload: form
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