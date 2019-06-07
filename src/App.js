import React, { Fragment } from "react";
import Login from "./components/Login/Login";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileList from "./components/Home/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:token_id" component={PasswordReset} />
        <Route
          path="/home"
          render={() => (
            <div>
              <Header />
              <div className='mainContent'>
                <Sidebar />
                <Home />
              </div>
            </div>
          )}
        />
        <Route
          path="/guga"
          render={() => (
            <div>
              <Header />
              <div className="mainContent">
              <Sidebar />
              <ProfileList />
              </div>
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
