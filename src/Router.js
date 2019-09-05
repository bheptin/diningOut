import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import HomePage from './components/HomePage';
import FriendList from './components/FriendList';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                <Scene key="homePage" component={HomePage} title="Welcome!" hideNavBar />
                    <Scene key="login" component={Login} title="Please Login" hideNavBar />
                </Scene>
                <Scene key="main" hideNavBar>
                    
                    <Scene  
                        key="friendList"
                        component={FriendList} 
                        title="Friends list"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
