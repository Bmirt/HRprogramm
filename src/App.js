import React from "react";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import UserProfile from "./UserProfile/Userprofile";
import ProtectedContainer from "./components/container/protectedContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:token_id" component={PasswordReset} />
          <Route path="/reset-password/:_id" component={UserProfile} />
          <ProtectedRoute path="/home" component={ProtectedContainer} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
