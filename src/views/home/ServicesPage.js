import React from 'react';
import { CImg, CButton } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = (props) => {
  const { success, error } = props;

  return (
    <div className="container-fluid" style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <CImg
            alt="Iven Logo"
            src="/image/Inven.jpg"
            height="50"
            width="50"
            style={{ borderRadius: '50%', marginRight: '10px', marginLeft: '5px' }}
          />
          <span style={{ color: '#017abf' }}>IVEN - Inventory Control Management System</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/buy">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/supports">Supports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/login">LogIn</a>
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
      <div className="d-flex align-items-center justify-content-between p-5">
        Buy page
      </div>
    </div>
  );
};

export default ServicesPage;