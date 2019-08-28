import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './common/Header';
import FriendList from './FriendList';

class HomePage extends Component {
    
        componentDidMount() {
            this.user = firebase.database().ref();
        console.log(this.props.user);
    }

    render() {
        return (
            <View>
                <Header headerText={'Welcome'} />
                <FriendList user={this.props.user} />
            </View>
        );
    } 
}

export default HomePage;
