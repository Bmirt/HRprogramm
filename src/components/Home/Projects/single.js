import React, { Component } from "react";

class SingleProject extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    const projectID = this.props.match.params.id;
    this.props.getProject(token, projectID);
  }
  render() {
    console.log(this.props.project.profiles);
    return <h1>Single Project Component</h1>;
  }
}

export default SingleProject;
