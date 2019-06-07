import {
  DELETE_PROFILE,
  ADD_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES
} from "../constants/profileListConstants";
const initialState = {
  profiles: [],
  error: null
};

const profileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };
    case ADD_PROFILE:
      console.log("add profile");
      return state;
    case DELETE_PROFILE:
      console.log("delete profile");
      return state;
    case CHANGE_PROFILE:
      console.log("change profile");
      return state;
    default:
      return state;
  }
};

export default profileListReducer;
