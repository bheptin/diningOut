import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import { Header, Button, Spinner, CardSection } from '../components/common';

class Firebase extends Component {
  componentWillMount() {
    firebase.initializeApp({
     apiKey: 'AIzaSyChhhBGwn08nP_ImvML0F1jAZhlBwuNsfk',
    authDomain: 'diningout-a4dbd.firebaseapp.com',
    databaseURL: 'https://diningout-a4dbd.firebaseio.com',
    projectId: 'diningout-a4dbd',
    storageBucket: '',
    messagingSenderId: '803789978898',
    appId: '1:803789978898:web:966a42ea3a700084'
       });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
    /*firebase.database().ref('Users/user3').set({
      firstName: 'Anthony',
      lastName: 'Mitchell',
      age: 36
    }).then(() => {
      console.log('Inserted!');
    });*/
  }

  renderContent() { 
    switch (this.state.loggedIn) {
      case true: 
          return (
            <View>
              <HomePage user={this.props.user} />
              <CardSection style={styles.logOutButton}>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
              </CardSection>
            </View>
            
          );
      case false:
          return (
          <View>
            <Header headerText={'Welcome to DiningOut'} />
            {this.renderContent()}
            <Login />
          </View>  
          
          );
      default:
        return (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
        );
    }
  }
  
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logOutButton: {
    flexDirection: 'row'
  }
};

  export default Firebase;

