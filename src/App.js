import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Input from './components/UI/Input/Input'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" component={Login} />
        <Input placeholder="Username" type="text" errors={{username:"username invalid", password:"password invalid"}} />
        <Input placeholder="Username" type="text" errors={{username:"username invalid", password:"password invalid"}} />
        {/* <Route path="/ResetPassword" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
