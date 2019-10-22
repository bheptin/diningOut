import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={Login} 
                        title="Please Login" 
                    />
                    <Scene key="newUser" component={CreateAccount} title="sign up!" />
                </Scene>

                <Scene key="main">
                    <Scene 
                        key="homePage" 
                        component={HomePage} 
                        title="Welcome!" 
                        hideNavBar 
                        initial 
                    />
                    <Scene 
                        key="friendList" 
                        component={FriendList} 
                        title="Check in on your friends"  
                        hideNavBar
                    />                
                    </Scene>
                    <Scene 
                        key="addFriends" 
                        component={AddFriend} 
                        title="Add Friends"  
                    />                
                </Scene>
        </Router>
    );
};

export default RouterComponent;
