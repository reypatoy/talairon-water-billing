import { combineReducers } from "redux";
import userReducer from "./user";
import userProfileReducer from "./userProfile";


const allReducers = combineReducers({
    user: userReducer,
    userProfileReducer: userProfileReducer
});


export default allReducers;