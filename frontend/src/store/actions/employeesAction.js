import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR,

    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_ERROR,

    EDIT_EMPLOYEE_REQUEST,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_ERROR,

    ADD_SCHEDULE_REQUEST,
    ADD_SCHEDULE_SUCCESS,
    ADD_SCHEDULE_ERROR,

    ADD_CARNET_REQUEST,
    ADD_CARNET_SUCCESS,
    ADD_CARNET_ERROR,
}
from '../constants'

import axiosClient from '../../helpers/axios';
import Swal from 'sweetalert2'

//funciones para traer a todos los empleados de base de datos
export function getEmployeesAction() {
    return (dispatch) => {
        dispatch( getEmployeesRequest() );

        // Peticion de insercion a la API
        axiosClient.get('api/employees/get/employees')
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
        axiosClient.post('api/employees/insert/employees', data)
            .then(response => {
                console.log(response);
                // Si se inserta correctamente el empleado
                switch (response.data) {
                    case 1:
                        dispatch( addEmployeeSuccess(data));
                        Swal.fire({
                            icon: 'success',
                            title: 'Agregado exitoso',
                            text: 'Hay un nuevo empleado!',
                        })
                        break;
                
                    case -1:
                        dispatch( addEmployeeError());
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oh oh!',
                            text: 'Ya existe un registro con esa identificacion',
                        })
                        break;
                    default:
                        dispatch( addEmployeeError());
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Intente de nuevo!',
                        })
                        break;
                }
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

//funciones para editar un empleado
export function editEmployeeAction(id, data) {
    return (dispatch) => {
        dispatch( editEmployeeRequest() );

        // Peticion de edicion a la API
        axiosClient.post('/', id, data)
            .then(response => {
                console.log(response);
                // Si se edita correctamente el empleado
                dispatch( editEmployeeSuccess(id, response.data) );
                return 1;
            })
            .catch(error => {
                console.log(error);
                // Si hay un error 
                dispatch( editEmployeeError());
            })
    }
}
export const editEmployeeRequest = () => ({
    type: EDIT_EMPLOYEE_REQUEST
})
export const editEmployeeSuccess = (id, data) => ({
    type: EDIT_EMPLOYEE_SUCCESS,
    id,
    payload: data
})
export const editEmployeeError = () => ({
    type: EDIT_EMPLOYEE_ERROR
})

// funciones para agregar el horario de un empleado
export function addScheduleAction(data, param) {
    return (dispatch) => {
        dispatch( addScheduleRequest() );

        // Peticion de insercion a la API
        console.log(data);

        axiosClient.post('api/employees/insert/schedules/'+param, data)
            .then(response => {
                console.log(response);
                // Si se inserta correctamente el empleado
                dispatch( addScheduleSuccess(data));
                if (response.data === 11) {
                    if (param === 'all') {
                        Swal.fire(
                            'Enhorabuena!',
                            'Todos sus empleados tienen horario',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Agregado con Exito!',
                            'Continue con los demas empleados',
                            'success'
                        )
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Agregado fallido',
                        text: 'Intente de nuevo mas tarde!',
                    })
                }
            })
            .catch(error => {
                console.log(error);
                // Si hay un error al insertarlo
                dispatch( addScheduleError());
                Swal.fire({
                    icon: 'error',
                    title: 'Agregado fallido',
                    text: 'Intente de nuevo mas tarde!',
                })
            })
    }
}
export const addScheduleRequest = () => ({
    type: ADD_SCHEDULE_REQUEST
})
export const addScheduleSuccess = (data) => ({
    type: ADD_SCHEDULE_SUCCESS,
    payload: data
})
export const addScheduleError = () => ({
    type: ADD_SCHEDULE_ERROR
})

// funciones para agregar el carnet
export function addCarnetAction(data) {
    return (dispatch) => {
        dispatch( addCarnetRequest() );

        // Peticion de insercion a la API
        axiosClient.post('/', data)
            .then(response => {
                console.log(response);
                // Si se inserta correctamente el carnet
                dispatch( addCarnetSuccess(data) );
                return 1;
            })
            .catch(error => {
                console.log(error);
                // Si hay un error al insertarlo
                dispatch( addCarnetError());
            })
    }
}
export const addCarnetRequest = () => ({
    type: ADD_CARNET_REQUEST
})
export const addCarnetSuccess = (data) => ({
    type: ADD_CARNET_SUCCESS,
    payload: data
})
export const addCarnetError = () => ({
    type: ADD_CARNET_ERROR
})