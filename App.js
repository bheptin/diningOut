
import React, { Component } from 'react';
import { Container, Header, Content, Footer, 
         FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/components/Login';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text>
              Welcome to my Dining App!
            </Text>
          </Body>
          <Right />
        </Header>
        <Content>
        <Login />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

