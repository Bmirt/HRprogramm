import React, { Component } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          <label>Login</label>
          <Input type="text" errors={{}} placeholder="Email or Username" />
          <Input type="password" errors={{}} placeholder="Password" />
          <Submit value="Login" />
          <Link to="/reset-password">Forgot Password?</Link>
        </form>
      </div>
    );
  }
}

export default Login;
