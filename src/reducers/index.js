// All reudcers are setup here
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from './userReducer';
import eventsReducer from "./eventsReducer";


export default combineReducers({
    auth: authReducer,
    user: userReducer,
    events: eventsReducer,
});