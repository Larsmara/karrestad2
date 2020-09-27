import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-container">
          Logo
        </Link>
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/contact" className="nav-button">
          Contact
        </Link>
        <Link to="/complain" className="nav-button">
          Complain
        </Link>
        <Link to="/rules" className="nav-button">
          Rules
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-button">
          Portal
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
