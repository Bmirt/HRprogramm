import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import Submit from "../UI/button/Button";
import ForgotPassword from "../UI/button/Button";
import Input from "../UI/Input/Input";
import Validation from "../Validation/Validation";
class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };
  handleSubmiit = e => {
    e.preventDefault();
    console.log(this.state);
    let newErrors = {};
    if (this.state.username.length <= 0) {
      newErrors.username = "Username field is empty";
    }
    if (this.state.password.length <= 0) {
      newErrors.password = "The password field is empty";
    }
    this.setState({ errors: newErrors });
  };
  handleSubmit = e => {
    e.preventDefault();

    fetch("laraver.local/api/login", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      // .then(response => response.json())
      .then(res => console.log(res));
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Form event={this.handleSubmiit}>
          <label>Login</label>
          <Input
            event={this.handleChange}
            name="username"
            type="text"
            error={this.state.errors.username}
            placeholder="Email or Username"
          />

          <Input
            event={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            error={this.state.errors.password}
          />

          <Submit value="Login" buttonClass="submit" />
          <Link to="/reset-password">
            <ForgotPassword value="Recover" buttonClass="change" />
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
