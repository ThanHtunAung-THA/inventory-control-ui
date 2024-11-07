// Navbar.js
import React from 'react';
import { CImg } from '@coreui/react'; // Import CImg if it's from CoreUI or replace with an img tag if not.
import { Link } from 'react-router-dom'; // Use Link if you're using React Router for routing.

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <CImg
          alt="Iven Logo"
          src="/image/Inven.jpg"
          height="50"
          width="50"
          className="styled-image2 img-fluid img-thumbnail rounded-circle mx-3"
        />
        <span style={{ color: '#017abf' }}>IVEN - Stock Management System</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/supports">Supports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/user-login">LogIn</a>
          </li>
        </ul>
        <div className="icons ml-3">
          <a href="#" className="text-secondary">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="text-secondary ml-2">
            <i className="fas fa-heart"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
