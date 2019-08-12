import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SplashScreen from 'react-native-splash-screen';
import Login from './components/Login';
import HomePage from './components/HomePage';
import reducers from './reducers';
import { Header, Button, Spinner, CardSection } from './components/common';
//import Facebook from './components/Facebook';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAFQqcjo6dQVSoyD2NM1C8NxFCTIOKFQS0',
      authDomain: 'try-angle.firebaseapp.com',
      databaseURL: 'https://try-angle.firebaseio.com',
      projectId: 'try-angle',
      storageBucket: 'try-angle.appspot.com',
      messagingSenderId: '576256759376',
      appId: '1:576256759376:web:2d3c2fc1dd18d58e'
       });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
          return (
            <View>
              <HomePage />
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

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          {this.renderContent()}
        </View>
      </Provider>
      
    );
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

