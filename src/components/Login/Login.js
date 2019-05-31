import React, { Component } from "react";
import axios from "axios";
import Form from "../Form/Form";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
import KeepMeSignedIn from "../UI/keepMeSignedIn/keepMeSignedIn";
import Logo from "../../TecHR.jpg";

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
      <div className={styles.loginBox}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.formBox}>
          <Form event={this.handleSubmiit} className={styles.loginForm}>
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
            <KeepMeSignedIn />
            <Submit value="Sign In" buttonClass="submit" />
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
