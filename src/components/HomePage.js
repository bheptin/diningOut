import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Header, Card, CardSection, Button } from './common';

class HomePage extends Component {

   /* componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
            const userId = user.uid;

            firebase.database().ref(`Users/${userId}`).once('value').then((snapshot) => {
                const license = (snapshot.val() && snapshot.val().license);
                this.setState(license.bind(this));
                console.log(user);
            });
      });
    }*/

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
                        <Button style={styles.button}>Find Friends</Button>
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

export default HomePage;
