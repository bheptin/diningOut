import { NEW_USER,
         EMAIL_CHANGED, 
         PASSWORD_CHANGED, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER_FAIL,
         LOGIN_USER_START,
         STREET_ADDRESS_CHANGED,
         FIRST_NAME_CHANGED,
         LAST_NAME_CHANGED,
         COUNTRY_CHANGED,
         STATE_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', 
                        password: '',
                        user: null,
                        error: '',
                        loading: false,
                        firstName: '',
                        lastName: '',
                        streetAddress: '',
                        country: 'United States',
                        stateChoice: ''
                     };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STREET_ADDRESS_CHANGED:
            return { ...state, streetAddress: action.payload };
        case FIRST_NAME_CHANGED:
            return { ...state, firstName: action.payload };
        case LAST_NAME_CHANGED:
            return { ...state, lastName: action.payload };
        case COUNTRY_CHANGED:
            return { ...state, user: action.payload, country: 'United States' };
        case STATE_CHANGED:
            return { ...state, stateChoice: action.payload };
        case NEW_USER:
            return { ...state, user: action.payload };
        case EMAIL_CHANGED:    
            return { ...state, email: action.payload };  
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed!', password: '', loading: false };
        default:
            return state;
    }
};
