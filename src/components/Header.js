import React from 'react';
import { Text, Container, Body, Button, Icon, Left, Right } from 'native-base';

const Header = () => {
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
        </Container>       
    );
};

export default Header;
