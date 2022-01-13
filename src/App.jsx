import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${"/" || "/home"}`} component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
