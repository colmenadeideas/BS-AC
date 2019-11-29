import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR,

    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_ERROR,
}
from '../constants'

import axiosClient from '../../helpers/axios';
import Swal from 'sweetalert2';

//funciones para traer a todos los empleados de base de datos
export function getEmployeesAction() {
    return (dispatch) => {
        dispatch( getEmployeesRequest() );

        // Peticion de insercion a la API
        axiosClient.get('/')
            .then(response => {
                console.log(response);
                //si la peticion se realiza correctamente
                if (response.data !== 0) {
                    // Si hay empleados registrados
                    dispatch( getEmployeesSuccess(response.data));
                } else {
                    // Si aun no hay empleados
                    dispatch( getEmployeesSuccess({}));
                }
            })
            .catch(error => {
                console.log(error);
                // Si hay error al traerlos
                dispatch( getEmployeesError());
            })
    }
}
export const getEmployeesRequest = () => ({
    type: GET_EMPLOYEES_REQUEST,
})
export const getEmployeesSuccess = (data) => ({
    type: GET_EMPLOYEES_SUCCESS,
    payload: data
})
export const getEmployeesError = () => ({
    type: GET_EMPLOYEES_ERROR,
})


// funciones para agregar un empleado
export function addEmployeeAction(data) {
    return (dispatch) => {
        dispatch( addEmployeeRequest() );

        // Peticion de insercion a la API
        axiosClient.post('/', data)
            .then(response => {
                console.log(response);
                // Si se inserta correctamente el empleado
                dispatch( addEmployeeSuccess(data) );
                Swal.fire({
                    icon: 'success',
                    title: 'Agregado exitoso',
                    text: 'Hay un nuevo empleado!',
                })
            })
            .catch(error => {
                console.log(error);
                // Si hay un error al insertarlo
                dispatch( addEmployeeError());
                Swal.fire({
                    icon: 'error',
                    title: 'Agregado fallido',
                    text: 'Intente de nuevo mas tarde!',
                })
            })
    }
}
export const addEmployeeRequest = () => ({
    type: ADD_EMPLOYEE_REQUEST
})
export const addEmployeeSuccess = (data) => ({
    type: ADD_EMPLOYEE_SUCCESS,
    payload: data
})
export const addEmployeeError = () => ({
    type: ADD_EMPLOYEE_ERROR
})