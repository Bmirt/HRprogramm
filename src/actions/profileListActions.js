import {
  ADD_PROFILE,
  DELETE_PROFILE,
  CHANGE_PROFILE,
  FETCH_PROFILES,
  FILTER_PROFILES,
  FETCH_TECHNOLOGIES,
  FETCH_PROJECTS,
  FETCH_PROJECT
} from "../constants/profileListConstants";

import axios from "axios";

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

export const fetchProfiles = token => {
  return dispatch => {
    axios
      .get("http://laravel.local/api/all-profiles", {
        headers: { "Content-Type": "application/json", Authorization: token }
      })
      .then(res => dispatch({ type: FETCH_PROFILES, payload: res.data }));
  };
};

export const fetchTechnologies = token => {
  return dispatch => {
    axios
      .get("http://laravel.local/api/get-technologies", {
        headers: { "Content-Type": "application/json", Authorization: token }
      })
      .then(res => dispatch({ type: FETCH_TECHNOLOGIES, payload: res.data }));
  };
};

export const fetchProjects = token => {
  return dispatch => {
    axios
      .get("http://laravel.local/api/get-projects", {
        headers: { "Content-Type": "application/json", Authorization: token }
      })
      .then(res => dispatch({ type: FETCH_PROJECTS, payload: res.data }));
  };
};

export const fetchProject = (token, id) => {
  return dispatch => {
    axios
      .get(`http://laravel.local/api/project/${id}`, {
        headers: { "Content-Type": "application/json", Authorization: token }
      })
      .then(res => dispatch({ type: FETCH_PROJECT, payload: res.data }));
  };
};

export const createProfile = (profile, token) => {
  return dispatch => {
    // axios
    //   .post("http://laravel.local/api/store-profile", {
    //     headers: { "Content-Type": "application/json", Authorization: token },
    //     data: profile
    //   })
    fetch("http://laravel.local/api/store-profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(profile)
    })
      .then(res => res.json())
      .then(res => dispatch({ type: ADD_PROFILE, payload: res }));
  };
};
