import React from "react";
import Login from "./components/Login/Login";
import Input from "./components/UI/Input/Input";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="*" component={Header} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/reset-password" component={ResetPassword} />
        {/* <Route path="/ResetPassword" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
