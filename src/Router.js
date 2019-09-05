import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={Login} title="Please Login" initial />
                    <Scene key="newUser" component={CreateAccount} title="sign up!" />
                </Scene>
                <Scene key="main" hideNavBar>
                <Scene key="homePage" component={HomePage} title="Welcome!" hideNavBar />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
