import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import DrawerExample from './components/DrawerExample';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene style={{ paddingTop: 64 }} key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="main" hideNavBar>
        <Scene 
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList} 
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
