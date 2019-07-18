import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen';
import { Header } from './components/common';
import Login from './components/Login';

export default class App extends Component {
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
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Header headerText={'DiningOut'} />
        <Login />
      </View>
    );
  }
}

