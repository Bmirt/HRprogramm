import {
  ADD_PROFILE,
  DELETE_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES
} from "../constants/profileListConstants";

export const addProfile = (newId, name) => ({
  type: ADD_PROFILE,
  newId,
  name
});

export const deleteProfile = name => ({
  type: DELETE_PROFILE,
  name
});

export const changeProfile = otherProfiles => ({
  type: CHANGE_PROFILE,
  otherProfiles
});

export const fetchProfiles = profiles => ({
  type: FETCH_PROFILES,
  profiles: profiles
});
