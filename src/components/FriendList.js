import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card } from './common';

class FriendList extends Component {
    render() {
        return (
           <Card style={styles.mainCard}>
               <Text>Friends List</Text>
           </Card>
        );
    }
}

const styles = {
    imageWrapper: {
        width: 250,
        height: 200,
        borderRadius: 20,
        justifyContent: 'center',
        flex: 1,
     },
     button: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        position: 'absolute',
        left: 20,
        top: 20
      },
      
};

const mapStateToProps = state => {
    return { friends: state.friends };
    };

export default connect(mapStateToProps)(FriendList);
