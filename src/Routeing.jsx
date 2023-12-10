import React from "react";

import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";

function Routeing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routeing;
