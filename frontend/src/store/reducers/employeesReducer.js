import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR,

    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_ERROR,

    ADD_SCHEDULE_REQUEST,
    ADD_SCHEDULE_SUCCESS,
    ADD_SCHEDULE_ERROR,
} from '../constants'

//state inicial para el modulo de empleados
const initialState = {
    employees: [],
    employee: {},
    schedule: {},
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        //casos para la solicitud de los empleados
        case GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                error: false,
            }
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload,
            }
        case GET_EMPLOYEES_ERROR:
            return {
                ...state,
                error: true,
            }

        //casos para agregar un empleado
        case ADD_EMPLOYEE_REQUEST:
            return {
                ...state,
                error: false,
            }
        case ADD_EMPLOYEE_SUCCESS:
            //si es correcto agrego el nuevo empleado a la lista de empleados existente
            return {
                ...state,
                employee: action.payload,
                employees: [...state.employees, action.payload]
            }
        case ADD_EMPLOYEE_ERROR:
            return {
                ...state,
                error: true,
            }

        // casos para agregar el horario de un empleado
        case ADD_SCHEDULE_REQUEST:
            return {
                ...state,
                error: false,
            }
        case ADD_SCHEDULE_SUCCESS:
            return {
                ...state,
                schedule: action.payload,
            }
        case ADD_SCHEDULE_ERROR:
            return {
                ...state,
                error: true,
            }
    
        default:
            return state
    }
    
}