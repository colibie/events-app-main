import { USER_INFO } from "../actions/type";

const initialState = {
    userInfo: false,
}
export default (state=initialState, action) => {
    switch(action.type) {
        case USER_INFO :
            return {
                ...state,
                userInfo: action.payload
            }

        default : return state;
    }
}