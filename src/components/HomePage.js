import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, Button, Spinner } from './common';
import { loginUser } from '../actions';
import FriendList from '../components/FriendList';

class HomePage extends Component {
    
      onFriendsButtonPress() {
          return (
              <FriendList />
          );
      }

      renderFriendsButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
            <Button style={styles.button} onPress={this.onFriendsButtonPress.bind(this)}>
          Find Friends
        </Button>
        );
      }

    render() {
        return (
            <View>
                <Header headerText={'Welcome to diningOut'} />
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
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
  };
  
  export default connect(mapStateToProps, { loginUser })(HomePage);
