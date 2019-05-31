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
    let newErrors = {};
    if (this.state.username !== true) {
      newErrors.username = "Username field is empty";
    }
    if (this.state.password !== true) {
      newErrors.password = "The password field is empty";
    }
    this.setState({ errors: newErrors });
  };
  handleSubmit = e => {
    e.preventDefault();

    fetch("laraver.local/api/test", {
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
    console.log(this.state);
    return (
      <div>
        <Form event={this.handleSubmiit}>
          <label>Login</label>
          <Input
            type="text"
            error={this.state.errors.username}
            placeholder="Email or Username"
          />

          <Input
            type="password"
            placeholder="Password"
            error={this.state.errors.password}
          />

          <Submit
            value="Login"
            buttonClass="submit"
            event={e => this.handleSubmiit(e)}
          />
          <Link to="/reset-password">
            <ForgotPassword value="Recover" buttonClass="change" />
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
