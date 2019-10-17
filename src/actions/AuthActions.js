import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, 
         PASSWORD_CHANGED, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER_FAIL, 
         LOGIN_USER_START,
         FIRST_NAME_CHANGED,
         LAST_NAME_CHANGED,
         STREET_ADDRESS_CHANGED,
         COUNTRY_CHANGED,
         STATE_CHANGED } from './types';

export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};

export const streetAddressChanged = (text) => {
    return {
        type: STREET_ADDRESS_CHANGED,
        payload: text
    };
};

export const countryChanged = (text) => {
    return {
        type: COUNTRY_CHANGED,
        payload: text
    };
};

export const stateChanged = (text) => {
    return {
        type: STATE_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const userCreate = ({ email, firstName, lastName, streetAddress, stateChoice }) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}`)
        .push({ lastName, firstName, streetAddress, stateChoice, email });
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

