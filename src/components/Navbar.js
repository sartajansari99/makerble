import React from "react";
import "./Styles/Navbar.css"; // Add your styling here
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Project Manager</div>
      <ul className="nav-links">
        <Link to="/">
          <li>Dashboard</li>
        </Link>
        <Link to="/project">
          <li>Projects</li>
        </Link>
        <Link to='/task'><li>Tasks</li></Link>
        <li>Boards</li>
        <Link to="/post">
          <li>Post</li>
        </Link>
      </ul>
      <ul className="custom">
        <li className="login">Login</li>
        <li>upgrade</li>
        <li>more</li>
      </ul>
    </nav>
  );
};

export default Navbar;
