import {
  DELETE_PROFILE,
  ADD_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES,
  FILTER_PROFILES,
  FETCH_PROJECTS,
  FETCH_TECHNOLOGIES,
  FETCH_PROJECT
} from "../constants/profileListConstants";
const initialState = {
  profiles: [],
  technologies: [],
  projects: [],
  choosenProject: {},
  choosenTechnology: {},
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
      console.log(action.payload);
      return {
        ...state,
        profiles: [
          ...state.profiles,
          {
            ...action.payload.profile,
            technologies: [...action.payload.technologies],
            projects: [...action.payload.projects]
          }
        ]
      };
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
    case FETCH_PROJECT:
      return {
        ...state,
        choosenProject: {
          ...action.payload.project,
          profiles: [...action.payload.profiles]
        }
      };
    case CHANGE_PROFILE:
      console.log(action.payload);
    default:
      return state;
  }
};

export default profileListReducer;
