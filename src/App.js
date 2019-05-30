import React from "react";
import Login from "./components/Login/Login";
import Input from "./components/UI/Input/Input";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" component={Login} />
<<<<<<< HEAD

=======
        <Input placeholder="Username" type="text" errors={{username:"username invalid", password:"password invalid"}} />
        <Input placeholder="Username" type="text" errors={{username:"username invalid", password:"password invalid"}} />
>>>>>>> 516ee5a85d184fc04207b67a511923e3574db5df
        {/* <Route path="/ResetPassword" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
