// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">
      <Link to="/">Vertex Papers</Link> {/* <Link> is being used here */}
    </h1>
    <ul className="nav-links">
      <li><a href="#features">Our Products</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li> {/* Add Signup link */}
    </ul>
  </nav>
);

export default Navbar;

