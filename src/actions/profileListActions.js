import {
  ADD_PROFILE,
  DELETE_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES,
  FILTER_PROFILES
} from "../constants/profileListConstants";

import axios from "axios";

const token = localStorage.getItem("token");

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

export const filteredProfiles = profiles => ({
  type: FILTER_PROFILES,
  profiles
});

export const fetchProfiles = () => {
  return dispatch => {
    axios
      .get("http://laravel.local/api/all-profiles", {
        headers: { "Content-Type": "application/json", Authorization: token }
      })
      .then(res => dispatch({ type: FETCH_PROFILES, payload: res.data }));
  };
};
