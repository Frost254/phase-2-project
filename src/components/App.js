import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Toys from "./Toys"

function App() {
  const [toysList, settoysList] = useState("");

  useEffect(() => {
    fetch("http://localhost:3004/toys")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

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