import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeList: EmployeeListReducer
});
