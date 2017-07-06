//import libs
import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Left, Right, Body, Icon } from 'native-base';
import { CardSection, Card } from './common';
// create comp

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" />
          </Left>
          <Body>
            <Text>Home Screen</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button
            style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Text>Open drawer</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}

// make avai
export default Home;
