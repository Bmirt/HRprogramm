import React from "react";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ProfileList from "./containers/ProfileListContainer";
import Header from "./components/Header/Header";
import Sidebar from "./containers/SidebarContainer";
import Projects from "./components/Home/Projects/Projects";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:token_id" component={PasswordReset} />
          <ProtectedRoute
            path="/home/profile_list"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <ProfileList />
                </div>
              </div>
            )}
          />
          <ProtectedRoute />
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
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
