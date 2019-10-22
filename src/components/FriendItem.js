import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class FriendItem extends Component {

    render() {
        const { firstName, lastName } = this.props.friends;
        return (
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {firstName} {lastName}
                        </Text>
                    </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default FriendItem;
