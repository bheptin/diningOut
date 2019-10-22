import firebase from 'firebase';
//import { Actions } from 'react-native-router-flux';
import { 
    FRIENDLIST_CREATE,
    FRIENDLIST_UPDATE,
    FRIENDLIST_FETCH_SUCCESS
} from './types';


export const friendListUpdate = ({ prop, value }) => {
    return {
        type: FRIENDLIST_UPDATE,
        payload: { prop, value }
    };
};

export const friendListCreate = ({ firstName, lastName, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/friends`)
        .push({ firstName, lastName, uid })
        .then(() => {
            dispatch({ type: FRIENDLIST_CREATE });
        });
    };
};

export const friendsFetch = () => {
    //const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/users')
        .on('value', snapshot => {
            dispatch({ type: FRIENDLIST_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
