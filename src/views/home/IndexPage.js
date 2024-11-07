import React from 'react';
import Navbar from '../../containers/_nav@home';
import { CImg, CButton } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = (props) => {
  const { success, error } = props;

  return (
<>
<Navbar />
  <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between px-5  py-3">
      <div className="text-content" style={{ maxWidth: '500px', color: '#017abf' }}>
        <h1 className=" mb-4">
          INVENTORY & STOCK MANAGEMENT SYSTEM
        </h1>
        <p className="mb-4" style={{color: '#000000a1'}}>
        Optimize your inventory with ease!
        Our Inventory-Stock Management system lets you track, manage, 
        and organize your stock in real-time. Reduce costs, prevent stockouts, 
        and streamline operations with automated tools designed to keep your business running smoothly. 
        Simplify your inventory process and focus on growth!
        </p>
        <CButton href="/products" className="btn btn-primary m2y2-hover">
          GET STARTED
        </CButton>
      </div>
      <div className="image-content">
        <CImg
          alt="Iven Inventory Management"
          height="500"
          src="/image/Inven.jpg"
          width="500"
          className="styled-image img-fluid"

        />
      </div>
    </div>
  </div>
</>
  );
};

export default IndexPage;