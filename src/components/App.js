import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Toys from "./Toys"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toys" element={<Toys />} />
      </Routes>
    </div>
  );
}

export default App;