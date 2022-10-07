import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/styles.css"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar" style={styles}>
      <h1> Funland Toy Store</h1>
      <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}> Home </NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> About </NavLink>
      <NavLink to="/toys" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Toys </NavLink>
    </div>
    </div>
    
  );
}

export default NavBar;