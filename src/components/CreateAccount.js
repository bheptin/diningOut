import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import { RegionDropdown } from 'react-country-region-selector';
import { Card, CardSection, Button, Input } from './common';
import { emailChanged, passwordChanged, loginUser, 
          newUser, countryChanged, stateChanged } from '../actions';

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

      onCountryChange(text) {
        this.props.countryChanged(text);
      }

    onButtonPress() {
      const { email, password } = this.props;
    
      this.props.loginUser({ email, password });
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

              <CardSection style={{ flexDirection: 'column' }}>
                <Text>Choose State</Text>
                <Picker
                
                selectedValue={this.props.stateChoice}
                onValueChange={text => this.props.stateChanged(text)}
                >
                  <Picker.Item label="Alabama" value="Alabama" />
                  <Picker.Item label="Alaska" value="Alaska" />
                  <Picker.Item label="Arizona" value="Arizona" />
                  <Picker.Item label="Arkansas" value="Arkansas" />
                  <Picker.Item label="California" value="California" />
                  <Picker.Item label="Colorado" value="Colorado" />
                  <Picker.Item label="Connecticut" value="Connecticut" />
                  <Picker.Item label="Deleware" value="Deleware" />
                  <Picker.Item label="Florida" value="Florida" />
                  <Picker.Item label="Georgia" value="Georgia" />
                  <Picker.Item label="Hawaii" value="Hawaii" />
                  <Picker.Item label="Idaho" value="Idaho" />
                  <Picker.Item label="Illinois" value="Illinois" />
                  <Picker.Item label="Indiana" value="Indiana" />
                  <Picker.Item label="Iowa" value="Iowa" />
                  <Picker.Item label="Kansas" value="Kansas" />
                  <Picker.Item label="Kentucky" value="Kentucky" />
                  <Picker.Item label="Louisiana" value="Louisiana" />
                  <Picker.Item label="Maine" value="Maine" />
                  <Picker.Item label="Maryland" value="Maryland" />
                  <Picker.Item label="Massachusetts" value="Massachusetts" />
                  <Picker.Item label="Michigan" value="Michigan" />
                  <Picker.Item label="Minnesota" value="Minnesota" />
                  <Picker.Item label="Mississippi" value="Mississippi" />
                  <Picker.Item label="Missouri" value="Missouri" />
                  <Picker.Item label="Montana" value="Montana" />
                  <Picker.Item label="Nebraska" value="Nebraska" />
                  <Picker.Item label="Nevada" value="Nevada" />
                  <Picker.Item label="New Hampshire" value="New Hampshire" />
                  <Picker.Item label="New Jersey" value="New Jersey" />
                  <Picker.Item label="New Mexico" value="New Mexico" />
                  <Picker.Item label="New York" value="New York" />
                  <Picker.Item label="North Carolina" value="North Carolina" />
                  <Picker.Item label="North Dakota" value="North Dakota" />
                  <Picker.Item label="Ohio" value="Ohio" />
                  <Picker.Item label="Oklahoma" value="Oklahoma" />
                  <Picker.Item label="Oregon" value="Oregon" />
                  <Picker.Item label="Pennsylvania" value="Pennsylvania" />
                  <Picker.Item label="Rhode Island" value="Rhode Island" />
                  <Picker.Item label="South Carolina" value="South Carolina" />
                  <Picker.Item label="South Dakota" value="South Dakota" />
                  <Picker.Item label="Tennessee" value="Tennessee" />
                  <Picker.Item label="Texas" value="Texas" />
                  <Picker.Item label="Utah" value="Utah" />
                  <Picker.Item label="Vermont" value="Vermont" />
                  <Picker.Item label="Virginia" value="Virginia" />
                  <Picker.Item label="Washington" value="Washington" />
                  <Picker.Item label="West Virginia" value="West Virginia" />
                  <Picker.Item label="Wisconsin" value="Wisconsin" />
                  <Picker.Item label="Wyoming" value="Wyoming" />
                </Picker>
              </CardSection>

              <CardSection>
                <Button onPress={() => Actions.newUser()}>
                    Create Account
                </Button>
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
    const { email, password, error, loading, country, stateChoice } = auth;
    return { email, password, error, loading, country, stateChoice };
  };
  
  export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged, 
    loginUser,
    newUser, 
    countryChanged, 
    stateChanged })(CreateAccount);
  
