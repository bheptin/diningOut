import { NEW_USER,
         EMAIL_CHANGED, 
         PASSWORD_CHANGED, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER_FAIL,
         LOGIN_USER_START,
         COUNTRY_CHANGED,
         REGION_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', 
                        password: '',
                        user: null,
                        error: '',
                        loading: false,
                        country: '',
                        region: ''
                     };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTRY_CHANGED:
            return { ...state, user: action.payload, country: '' };
        case REGION_CHANGED:
            return { ...state, user: action.payload, region: '' };
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
