import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import styles from './ResetPassword.module.css'
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Form from "../Form/Form";
class ResetPassword extends Component {
  state = {
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

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isVerified) {
      alert("You are verified");
    } else {
      alert("Please verify");
    }
  };

  render() {
    return (
      <div>
        <Form title="Reset Password" event={this.handleSubmit}>
          <Input type="text" placeholder="Email or Username" errors={{}} />
          <div className={styles.recaptchaBox}>
            <Recaptcha
              size="normal"
              render="explicit"
              sitekey="6LcddKYUAAAAAMg-9zW-nKLB9OoO6SCPmFuSviBJ
              "
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            />
          </div>
          <Button type="submit" value="Reset Password" buttonClass="change" />
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
