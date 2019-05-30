import React, { Component } from "react";
import Submit from "../UI/button/Button";
import Input from "../UI/Input/Input";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <Input errors={{}} />
          <Input errors={{}} />
          <Submit value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
