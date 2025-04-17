import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
  <div>
    <div className="nav-style">
      <nav className="nav">
        <div className="nav-logo">VARNA S</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">AboutMe</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contactme">ContactMe</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
};