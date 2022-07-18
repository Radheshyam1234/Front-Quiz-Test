import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, LandingPage } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
