import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Client from "./Pages/Client";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";
import gif from "./Assets/spinner.gif";
import aos from "aos";
import "aos/dist/aos.css";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import ResetPassword from "./Components/ResetPassword";
import TawkTo from "tawkto-react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const tawk = new TawkTo("620a265fb9e4e21181befc34", "1frrqbq25");

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  if (isLoading) {
    return (
      <div className="flex min-h-screen  w-auto justify-center items-center">
        <div className="">
          <img src={gif}></img>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${"/" || "/home"}`} component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Signin} />
        <Route path="/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/dashboard" component={Client} />
        <Route
          path="/404"
          exact={true}
          component={
            <div className="min-h-screen items-center justify-center bg-[#000]">
              <h2 className="text-white font-bold">404</h2>
              <p className="text-white font-medium">Page not found</p>
            </div>
          }
        />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
