import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Client from "./Pages/Client";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";
import gif from "./Assets/spinner.gif";
import aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  if (isLoading) {
    return (
      <div className="flex min-h-auto pt-[10em] w-auto justify-center align-center">
        <img src={gif}></img>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${"/" || "/home"}`} component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Signin} />
        <Route path="/dashboard" component={Client} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
