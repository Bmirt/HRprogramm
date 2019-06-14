import React from "react";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import ProtectedContainer from "./components/container/protectedContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute path="/home" component={ProtectedContainer} />
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:token_id" component={PasswordReset} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
