//import libs
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Root, Container, Content, Button, Text } from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import SideBar from './SideBar';
import Home from './Home';
import Anatomy from './Anatomy';

const Drawer = DrawerNavigator(
  {
		Home: { screen: Home },
		Anatomy: { screen: Anatomy }
	},
	{
		initialRouteName: 'Home',
		contentComponent: props => <SideBar {...props} />
	}
);

// make comp
class EmployeeList extends Component {
  
  componentWillMount() {
    console.log('Will Fetch employees');
    this.props.employeesFetch();   

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props still here -> the old set of props
    this.createDataSource(nextProps);
  }
  dataSource = {};
  
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 
    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    //console.log(this.props.employees);
    console.log('Employ list render. Datasource =');
    console.log(this.dataSource);
    return (
      <Root>
        <Drawer />
      </Root>
    );
  }
}

const mapStateToProps = ({ employeeList }) => {
  const employees = _.map(employeeList, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

// make avai
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
