import React from "react";
import Login from "./components/Login/Login";
import "./App.css";

// import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:path_id" component={PasswordReset} />
      </Router>
    </div>
  );
}

export default App;
