import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./Pages/Client";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";

const App = () => {
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
