import { combineReducers } from "redux";
import PlifeReducer from "./Plife";
import DlifeReducer from "./Dlife";
export default combineReducers({
    PlifeReducer,
    DlifeReducer
})