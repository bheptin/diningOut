import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, newUser } from '../actions';

class Login extends Component {
  
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

onButtonPress() {
  const { email, password } = this.props;

  this.props.loginUser({ email, password });
}

createAccountButton() {
  if (this.props.loading) {
    return <Spinner size="large" />;
  }
  return (
    <Button onPress={() => Actions.newUser()}>
            Create Account
    </Button>
  );
}

renderButton() {
  if (this.props.loading) {
    return <Spinner size="large" />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
    Log in
  </Button>
  );
}

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input 
              label="Email"
              placeholder="user@example.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input 
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <CardSection>    
            {this.createAccountButton()}
          </CardSection>   
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser, newUser })(Login);
