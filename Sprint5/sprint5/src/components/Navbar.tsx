import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">PatriciaFrontEndDevPortfolio</div>
      <div className="navbar-icons">
        <a href="#home" className="icon" aria-label="Home">
          🏠
        </a>
        <a href="#linkedin" className="icon" aria-label="LinkedIn">
          💼
        </a>
        <a href="#github" className="icon" aria-label="GitHub">
          🐱
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
