//import lib
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
//create cmp
class SideBar extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            Home
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Anatomy')}>
            Anatomy
          </Button>
        </CardSection>
      </Card>
    );
  }
}
//make avai
export default SideBar;
