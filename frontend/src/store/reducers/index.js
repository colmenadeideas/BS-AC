import { combineReducers } from 'redux';
import validateReducer from './validateReducer';
import loginReducer from './loginReducer';
import devicesReducer from './devicesReducer';

export default combineReducers({
    login: loginReducer,
    validate: validateReducer,
    devices: devicesReducer,
});