import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { emailChanged, 
         passwordChanged, 
         loginUser, 
         newUser, 
         countryChanged, 
         stateChanged, 
         userUID, 
         firstNameChanged, 
         lastNameChanged, 
         streetAddressChanged, 
         userCreate 
        } from '../actions';

class Login extends Component {
  
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onUIDCreation(text) {
    this.props.userUID(text);
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onStreetAddressChange(text) {
    this.props.streetAddressChanged(text);
  }

  onCountryChange(text) {
    this.props.countryChanged(text);
  }


onButtonPress() {
  const { email, 
    password, 
    user, 
    error, 
    loading, 
    UID, 
    firstName, 
    lastName, 
    streetAddress, 
    country, 
    stateChoice   
  } = this.props;

  this.props.loginUser({ email, 
    password, 
    user, 
    error, 
    loading, 
    UID, 
    firstName, 
    lastName, 
    streetAddress, 
    country, 
    stateChoice 
   });
}

createAccountButton() {
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
  const { 
    email, 
    password, 
    user, 
    error, 
    loading, 
    UID, 
    firstName, 
    lastName, 
    streetAddress, 
    country, 
    stateChoice 
        } = auth;
  return { 
    email, 
    password, 
    user, 
    error, 
    loading, 
    UID, 
    firstName, 
    lastName, 
    streetAddress, 
    country, 
    stateChoice 
         };
};

export default connect(mapStateToProps, { 
  emailChanged, 
  passwordChanged, 
  loginUser, 
  newUser, 
  countryChanged, 
  stateChanged, 
  userUID, 
  firstNameChanged, 
  lastNameChanged, 
  streetAddressChanged, 
  userCreate 
 })(Login);
