import React, { Fragment } from "react";
import Login from "./components/Login/Login";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:path_id" component={PasswordReset} />
        <Route
          path="/home"
          render={() => (
            <div>
              <Header />
              <Home />
              <Sidebar />
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
