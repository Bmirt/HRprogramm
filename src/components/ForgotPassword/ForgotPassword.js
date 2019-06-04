import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import styles from "./ForgotPassword.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Form from "../Form/Form";
import Validation from "../Validation/Validation";
var callback = function() {
  console.log("Done!!!!");
};

class ForgotPassword extends Component {
  state = {
    username: "",
    isVerified: false,
    validated: false
  };
  verifyCallback = response => {
    if (response) {
      this.setState({
        isVerified: true,
        validated: 1
      });
    }
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.isVerified) {
      fetch("http://laravel.local/api/getemail", {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.username
        })
      })
        .then(res => res.json())
        .then(res => console.log(res));
    } else {
      this.setState({
        validated: 0
      });
    }
  };
  componentWillUnmount() {
    if (this.recaptchaInstance) {
      this.recaptchaInstance.reset();
    }
  }

  render() {
    return (
      <div>
        <Form title="Forgot Password" event={this.handleSubmit}>
          <Input
            event={this.handleChange}
            name="username"
            type="email"
            placeholder="Email or Username"
            errors={{}}
          />
          <div className={styles.recaptchaBox}>
            <Recaptcha
              onloadCallback={callback}
              ref={e => (this.recaptchaInstance = e)}
              size="normal"
              render="explicit"
              sitekey="6LcddKYUAAAAAMg-9zW-nKLB9OoO6SCPmFuSviBJ
              "
              verifyCallback={this.verifyCallback}
            />
          </div>
          {this.state.validated === 0 && <Validation value="Please Verify" />}
          <Button type="submit" value="Forgot Password" buttonClass="change" />
        </Form>
      </div>
    );
  }
}

export default ForgotPassword;
