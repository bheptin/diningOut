import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SplashScreen from 'react-native-splash-screen';
import reducers from './reducers';
import Router from './Router';


export default class App extends Component {
  state = { loggedIn: null };

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

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
         <Router />
      </Provider>
      
    );
  }
}
