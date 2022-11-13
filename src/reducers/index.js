import { combineReducers } from "redux";
import userReducer from "./user";
import customerReducer from "./customer";


const allReducers = combineReducers({
    user: userReducer,
    customerReducer: customerReducer
});


export default allReducers;