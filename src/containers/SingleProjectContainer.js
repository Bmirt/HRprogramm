import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProject } from "../actions/profileListActions";
import SingleProject from "../components/Home/Projects/single";

const mapStateToProps = state => {
  return {
    project: state.profileListReducer.choosenProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProject: (token, id) => dispatch(fetchProject(token, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProject);
