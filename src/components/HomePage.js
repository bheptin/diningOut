import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, Button, Spinner } from './common';
import { loginUser } from '../actions';

class HomePage extends Component {

      renderFriendsButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
            <Button onPress={() => Actions.friendList()}>
                Friends List
            </Button>
        );
      }

    render() {
        return (
            <View>
                <Header 
                    headerText={'Welcome to diningOut'} 
                />
                <Card style={styles.mainCard}>
                    <CardSection>
                        <Image 
                            style={styles.imageWrapper} 
                            source={require('../../images/friendsGathered.jpg')} 
                        />
                    </CardSection>
                    <CardSection>
                    {this.renderFriendsButton()}                        
                    </CardSection>

                    <CardSection>
                        <Image 
                                style={styles.imageWrapper} 
                                source={require('../../images/restaurant.jpg')} 
                        />
                    </CardSection>
                    <CardSection>
                        <Button style={styles.button}>Search Restaurants</Button>
                    </CardSection> 
                </Card>
            </View>
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

const mapStateToProps = ({ auth }) => {
    const { email, 
        password, 
        user, 
        error, 
        loading, 
        UID, 
        firstName, 
        lastName, 
        streetAddress, 
        country, 
        stateChoice   
    } = auth;
    return { email, 
        password, 
        user, 
        error, 
        loading, 
        UID, 
        firstName, 
        lastName, 
        streetAddress, 
        country, 
        stateChoice 
    };
  };
  
  export default connect(mapStateToProps, { loginUser })(HomePage);
