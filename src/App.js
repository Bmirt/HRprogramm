import React from "react";
import Login from "./components/Login/Login";
import Input from "./components/UI/Input/Input";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" component={Login} />
        {/* <Route path="/ResetPassword" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
