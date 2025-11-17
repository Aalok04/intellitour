import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Intellitour</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/planner">Planner</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
