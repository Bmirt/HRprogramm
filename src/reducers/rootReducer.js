import { combineReducers } from "redux";
import profileListReducer from "./profileListReducer";
import navigationReducer from './navigationReducer'

const rootReducer = combineReducers({
  profileListReducer,
  navigationReducer
});

export default rootReducer;
