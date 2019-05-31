import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <Input type="text" errors={{}} placeholder="Email or Username" />
          <Input type="password" errors={{}} placeholder="Password" />
          <Submit value="Login" />
        </form>
        <Link to="/reset-password">Forgot Password?</Link>
      </div>
    );
  }
}

export default Login;
