import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Recaptcha from "react-recaptcha";
class ResetPassword extends Component {
  state = {
    isVerified: false
  };
  onLoadRecaptcha() {
    console.log("loaded");
  }

  verifyCallback(recaptchaToken) {
    if (recaptchaToken) {
      this.setState({
        isVerified: true
      });
    }
    console.log(recaptchaToken, "<= your recaptcha token");
  }
  render() {
    return (
      <div>
        <h1>ResetPassword</h1>
        <form>
          <Input type="text" placeholder="Email or Passwerd" errors={{}} />
          <Recaptcha
            size="normal"
            render="explicit"
            sitekey="6LcddKYUAAAAAMg-9zW-nKLB9OoO6SCPmFuSviBJ
            "
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
          <Button type="submit" value="Reset Password" />
        </form>
      </div>
    );
  }
}

export default ResetPassword;
