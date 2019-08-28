import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';

class FriendList extends Component {

    componentWillMount() {
        firebase.database().ref('Users').once('value', (data) => {
            console.log(data.toJSON());   
        });
    }

    render() {
        return (
            <View stle={styles.container}>
                <Text>Friend's List</Text>
                <Text>hello</Text>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  

export default FriendList;
