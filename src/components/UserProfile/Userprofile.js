import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  state = {};
  componentDidMount() {
    // let token = localStorage.getItem("token");
    // fetch(`http://laravel.local/api/profile/${this.props.match.params.id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: token
    //   }
    // })
    //   .then(response => response.json())
    //   .then(res => {
    //     if (res.profile) {
    //       this.setState({ profile: res.profile });
    //     }
    //   });
  }
  render() {
    const profile = this.props.state[0];
    return <div>{<h1>{profile ? profile.name : null}</h1>}</div>;
  }
}

export default UserProfile;
