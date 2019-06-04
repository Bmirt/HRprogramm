import React, { Component } from "react";
import Form from "../Form/Form";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
import KeepMeSignedIn from "../UI/keepMeSignedIn/keepMeSignedIn";
import Logo from "../../TecHR.jpg";
import styles from "./Login.module.css";
import Validation from "../Validation/Validation";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isChecked: true,
    errors: {}
  };
  changeCheckBoxState = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let newErrors = {};
    if (this.state.username.length <= 0) {
      newErrors.username = "username field is empty";
    }
    if (this.state.password.length <= 0) {
      newErrors.password = "password field is empty";
    }
    if (this.state.password.length <= 0 || this.state.username.length <= 0) {
      newErrors.error = "Fill in empty field(s)";
    }
    this.setState({ errors: newErrors });
    if (typeof newErrors.error !== undefined) {
      fetch("http://139.59.131.157/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  };

  submit = e => {
    e.preventDefault();
    axios.get("laravel.local/api/test").then(res => res.data);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className={styles.loginBox}>
        <img src={Logo} className={styles.logo} alt="" />
        <div className={styles.formBox}>
          <Form event={this.handleSubmit} className={styles.loginForm}>
            <Input
              event={this.handleChange}
              name="username"
              type="email"
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
            <KeepMeSignedIn
              checked={this.state.isChecked}
              functionCheck={() => this.changeCheckBoxState}
            />
            <Validation value={this.state.errors.error} />
            <Submit value="Sign In" buttonClass="submit" />
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
