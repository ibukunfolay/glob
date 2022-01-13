import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Sign";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
