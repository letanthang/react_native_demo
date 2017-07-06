//import libs
import React, { Component } from 'react';
import { 
  Container, Content, Header, 
  Left, Right, Button, Text, Icon, 
  Title, Body } from 'native-base';

import styles from './style';
// create comp

class Anatomy extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Charts</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>This is other screen: Anatomy</Text>
        </Content>
      </Container>

    );
  }
}

// make avai
export default Anatomy;
