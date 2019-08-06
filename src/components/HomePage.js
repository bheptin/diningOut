import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './common/Header';
import FriendList from './FriendList';

class HomePage extends Component {
    componentWillMount() {
        
    }

    render() {
        return (
            <View>
                <Header headerText={'Welcome'} />
            </View>
        );
    } 
}

export default HomePage;
