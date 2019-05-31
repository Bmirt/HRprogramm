import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Submit from "../UI/button/Button";
import ForgotPassword from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = () => {};
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Form event={this.handleSubmit} title="Login">
          <Input
            name="username"
            event={this.handleChange}
            type="text"
            errors={{ username: "invalid" }}
            placeholder="Email or Username"
          />
          <Input
            name="password"
            event={this.handleChange}
            type="password"
            errors={{}}
            placeholder="Password"
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
