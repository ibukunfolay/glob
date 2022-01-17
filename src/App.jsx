import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./Pages/Client";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";
import gif from "./Assets/spinner.gif";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
      <Routes>
        <Route path={`${"/" || "/home"}`} element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Signin />} />
        <Route path="dashboard" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
