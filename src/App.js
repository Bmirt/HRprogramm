import React from "react";
import Login from "./components/Login/Login";
import "./App.css";

// import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/reset-password" component={ForgotPassword} />
      </Router>
    </div>
  );
}

export default App;
