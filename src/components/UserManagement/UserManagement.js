import React, { Component } from "react";
class UserManagement extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    c_password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user = { ...this.state };
    fetch("http://laravel.local/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "applcation/json",
        Accept: "applcation/json",
        Authorization: token
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="name"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="c_password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </>
    );
  }
}

export default UserManagement;
