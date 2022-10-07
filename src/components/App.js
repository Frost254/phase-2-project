import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Toys from "./Toys"

function App() {
  const [toysList, settoysList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/toys")
    .then(res => res.json())
    .then(data => settoysList(data))
  }, [])

  function HandleItem(newToy) {
  settoysList([...toysList, newToy]); 
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onAddItem={HandleItem}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/toys" element={<Toys toys= {toysList}/>} />
      </Routes>
    </div>
  );
}

export default App;