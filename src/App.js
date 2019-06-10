import React from "react";
import Login from "./components/Login/Login";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ProfileList from "./containers/ProfileListContainer";
import Header from "./components/Header/Header";
import Sidebar from "./containers/SidebarContainer";
import Projects from "./components/Home/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:token_id" component={PasswordReset} />
        <Route
          path="/home/profile_list"
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
        <Route
          path="/home/projects"
          render={() => (
            <div>
              <Header />
              <div className="mainContent">
                <Sidebar />
                <Projects />
              </div>
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
