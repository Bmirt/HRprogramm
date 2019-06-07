import {
    CHANGE_ACTIVE
  } from "../constants/navigationConstants";
  const initialState = {
    active: 0,
  };
  
  const profileListReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_ACTIVE:
        console.log("i was here", action);
        return {
          ...state,
          active: action.button
        };
      default:
        return state;
    }
  };
  
  export default profileListReducer;
  