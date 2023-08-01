import { combineReducers } from "redux";
import auth from "./authReducer";
import notify from "./nofityReducer"

export default combineReducers({
    auth,
    notify
})