import { combineReducers } from 'redux';
import validateReducer from './validateReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    login: loginReducer,
    validate: validateReducer
});