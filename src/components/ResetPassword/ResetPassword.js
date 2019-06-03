import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import styles from "./ResetPassword.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Form from "../Form/Form";
import Validation from "../Validation/Validation";
var callback = function() {
  console.log("Done!!!!");
};

class ResetPassword extends Component {
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
    if (this.state.isVerified) {
      alert("You are verified");
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
        <Form title="Reset Password" event={this.handleSubmit}>
          <Input type="email" placeholder="Email or Username" errors={{}} />
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
          <Validation
            value={this.state.validated === 0 ? "Please verify" : null}
          />
          <Button type="submit" value="Reset Password" buttonClass="change" />
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
