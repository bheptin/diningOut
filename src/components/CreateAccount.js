import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { RegionDropdown, CountryDropdown } from 'react-country-region-selector';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, 
          newUser, countryChanged, regionChanged } from '../actions';

class CreateAccount extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
      }
    
      onPasswordChange(text) {
        this.props.passwordChanged(text);
      }
    
      onFirstNameChange(text) {
        this.props.firstNameChanged(text);
      }
    
      onLastNameChange(text) {
        this.props.lastNameChanged(text);
      }

      onCountryChanged(text) {
        this.props.countryChanged(text);
      }

      onRegionChanged(text) {
        this.props.regionChanged(text);
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
              <CardSection>
                <Input 
                label="First Name"
                  placeholder="First Name"
                  onChangeText={this.onFirstNameChange.bind(this)}
                  value={this.props.firstName}
                />
               </CardSection>
              <CardSection>
                <Input 
                  label="Last Name"
                  placeholder="Last Name"
                  onChangeText={this.onLastNameChange.bind(this)}
                  value={this.props.lastName}
                />
              </CardSection>
              <CardSection>
                <Input 
                  label="Street Address"
                  placeholder="ex: 123 Main st."
                  onChangeText={this.onLastNameChange.bind(this)}
                  value={this.props.lastName}
                />
              </CardSection>
              <CardSection>
                <RegionDropdown />
              </CardSection>
              <CardSection>
                {this.renderButton()}
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
    emailChanged, 
    passwordChanged, 
    loginUser,
    newUser, 
    countryChanged, 
    regionChanged })(CreateAccount);
  
