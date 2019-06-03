import React, { Component } from "react";
import Form from "../Form/Form";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
import KeepMeSignedIn from "../UI/keepMeSignedIn/keepMeSignedIn";
import Logo from "../../TecHR.jpg";
import styles from "./Login.module.css";
import Validation from "../Validation/Validation";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isCheked: true,
    errors: {}
  };
  changeCheckBoxState = () => {
    this.setState({
      isCheked: !this.state.isCheked
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let newErrors = {};
    if (this.state.username.length <= 0) {
      newErrors.username = "username field is empty";
    }
    if (this.state.password.length <= 0) {
      newErrors.password = "password field is empty";
    }
    if (this.state.password.length <= 0 || this.state.username.length <= 0) {
      newErrors.error = "Fill in empty fields";
    }
    this.setState({ errors: newErrors });
    if (newErrors.error !== undefined) {
      fetch("laraver.local/api/login", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        // .then(response => response.json())
        .then(res => console.log(res));
    }
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
              checked={this.state.isCheked}
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
