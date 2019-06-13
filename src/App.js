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
import Analytics from "./components/Analytics/Analytics";
import Calendar from "./components/Calendar/Calendar";
import BlackList from "./components/BlackList/BlackList";
import UserManagement from "./components/UserManagement/UserManagement";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import UserProfile from "./UserProfile/Userprofile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:token_id" component={PasswordReset} />
          <Route path="/reset-password/:_id" component={UserProfile} />
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
          <ProtectedRoute
            path="/home/projects"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <Projects />
                </div>
              </div>
            )}
          />
          <ProtectedRoute
            path="/home/analytics"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <Analytics />
                </div>
              </div>
            )}
          />
          <ProtectedRoute
            path="/home/calendar"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <Calendar />
                </div>
              </div>
            )}
          />

          <ProtectedRoute
            path="/home/black_list"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <BlackList />
                </div>
              </div>
            )}
          />
          <ProtectedRoute
            path="/home/user_management"
            component={() => (
              <div>
                <Header />
                <div className="mainContent">
                  <Sidebar />
                  <UserManagement />
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
