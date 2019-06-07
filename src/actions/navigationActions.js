import {
    CHANGE_ACTIVE
  } from "../constants/navigationConstants";

  export const changeActive = button => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: CHANGE_ACTIVE, button });
    };
  };