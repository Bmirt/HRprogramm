import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import Form from "../Form/Form";
import Validation from "../Validation/Validation";

class PasswordReset extends Component {
  state = {
    newpassword: "",
    newpasswordconfirm: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.newpassword !== "" &&
      this.state.newpassword === this.state.newpasswordconfirm
    ) {
      console.log("ima fetch");
    } else {
      let newErrors = {};
      console.log("changing state");
      newErrors.error = "Please check Password and confirm new password fields";
      this.setState({ errors: { error: "hi" } });
      this.setState({ errors: newErrors });
    }
  };

  render() {
    return (
      <div>
        <Form title="Password Reset" event={this.handleSubmit}>
          <Input
            event={this.handleChange}
            name="newpassword"
            type="password"
            placeholder="New Password"
            errors={{}}
          />
          <Input
            event={this.handleChange}
            name="newpasswordconfirm"
            type="password"
            placeholder="Confirm New Password"
            errors={{}}
          />
          {this.state.errors.error && (
            <Validation value={this.state.errors.error} />
          )}
          <Button type="submit" value="Password Reset" buttonClass="change" />
        </Form>
      </div>
    );
  }
}

export default PasswordReset;
