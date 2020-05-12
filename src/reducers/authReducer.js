import { FETCH_USER } from "./../actions/type";

const initialState = {
    success: false,
    message: false,
    token: false,
    _id: false,
    firstName: false,
    lastName: false,
    email: false,
    loggedIn: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER : 
            if (action.payload.success) {
                return {
                    ...state,
                    success: true,
                    loggedIn: action.payload.success,
                    message: action.payload.message,
                    token: action.payload.data._token,
                    _id: action.payload.data._id,
                    firstName: action.payload.data.firstName,
                    lastName: action.payload.data.lastName,
                    email: action.payload.data.email,
                };
            } else {
                return {
                    // Wrong username and password or logged out
                    ...state,
                    message: action.payload.message
                }
            }
            
        default : 
            return state;
    }
}