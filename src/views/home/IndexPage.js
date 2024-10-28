import React from 'react';
import { CImg, CButton } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = (props) => {
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
        <div className="text-content" style={{ maxWidth: '500px', color: '#017abf' }}>
          <h1 className="display-5 mb-4">
            INVENTORY-STOCK MANAGEMENT
          </h1>
          <p className="mb-4" style={{color: '#000000a1'}}>
          Optimize your inventory with ease!
          Our Inventory-Stock Management system lets you track, manage, 
          and organize your stock in real-time. Reduce costs, prevent stockouts, 
          and streamline operations with automated tools designed to keep your business running smoothly. 
          Simplify your inventory process and focus on growth!
          </p>
          <CButton href="/supports" className="btn btn-outline-primary">
            GET STARTED
          </CButton>
        </div>
        <div className="image-content">
          <CImg
            alt="Iven Inventory Management"
            height="400"
            src="/image/Inven.jpg"
            width="600"
            className="styled-image"
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;