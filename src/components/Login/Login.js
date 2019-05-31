import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from '../Form/Form'
import Submit from "../UI/button/Button";
import ForgotPassword from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {};
  handleSubmiit=()=>{}
  render() {
    return (
      <div>
        <Form event={this.handleSubmiit}>
          <label>Login</label>
          <Input type="text" errors={{}} placeholder="Email or Username" />
          <Input type="password" errors={{}} placeholder="Password" />
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
