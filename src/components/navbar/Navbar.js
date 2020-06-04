import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand">Vincent Duguet</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
