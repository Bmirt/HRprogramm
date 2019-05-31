import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Form from "../Form/Form";
class ResetPassword extends Component {
  state = {
    username: "",
    isVerified: false
  };
  recaptchaLoaded() {
    console.log("loaded");
  }

  verifyCallback = response => {
    if (response) {
      this.setState({
        isVerified: true
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
    if (this.state.isVerified) {
      alert("You are verified");
    } else {
      alert("Please verify");
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form title="Reset Password" event={this.handleSubmit}>
          <Input
            event={this.handleChange}
            name="username"
            type="text"
            placeholder="Email or Username"
            errors={{}}
          />
          <Recaptcha
            size="normal"
            render="explicit"
            sitekey="6LcddKYUAAAAAMg-9zW-nKLB9OoO6SCPmFuSviBJ
            "
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
          <Button type="submit" value="Reset Password" buttonClass="change" />
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
