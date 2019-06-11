import {
  DELETE_PROFILE,
  ADD_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES,
  FILTER_PROFILES
} from "../constants/profileListConstants";
const initialState = {
  profiles: [],
  error: null
};

const profileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      console.log("i was here", action);
      return {
        ...state,
        profiles: action.profiles
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
    case FILTER_PROFILES:
      console.log("FILTERED PROFILES", action.profiles);
      return {
        ...state,
        profiles: action.profiles
      };
    default:
      return state;
  }
};

export default profileListReducer;
