import { combineReducers } from 'redux';
import validateReducer from './validateReducer';
import loginReducer from './loginReducer';
import employeesReducer from './employeesReducer'
import devicesReducer from './devicesReducer';

export default combineReducers({
    login: loginReducer,
    validate: validateReducer,
    employees: employeesReducer,
    devices: devicesReducer,
});