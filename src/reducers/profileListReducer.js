import {
  DELETE_PROFILE,
  ADD_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES,
  FILTER_PROFILES,
  FETCH_PROJECTS,
  FETCH_TECHNOLOGIES
} from "../constants/profileListConstants";
const initialState = {
  profiles: [],
  technologies: [],
  projects: [],
  error: null
};

const profileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return {
        ...state,
        profiles: action.payload.profiles
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
      return {
        ...state,
        profiles: action.profiles
      };
    case FETCH_TECHNOLOGIES:
      return {
        ...state,
        technologies: action.payload.technologies
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload.profile]
      };
    default:
      return state;
  }
};

export default profileListReducer;
