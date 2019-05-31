import React, { Component } from "react";
import styles from './Login.module.css';
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className={styles.loginForm}>
          <Input errors={{}} />
          <Input errors={{}} />
          <Submit value="Login"/>
        </form>
      </div>
    );
  }
}

export default Login;
