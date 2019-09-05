import { combineReducers } from 'redux';
import FriendsReducer from './FriendsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer,
    friends: FriendsReducer   
});

/*
variables:
    user
    friends - Library reducer
    friends selected - selection reducer
    restaurants

*/
