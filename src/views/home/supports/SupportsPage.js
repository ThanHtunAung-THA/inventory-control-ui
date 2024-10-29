import React from 'react';
import Navbar from '../../../containers/_nav@home';
import { CImg, CButton } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SupportsPage = (props) => {
  const { success, error } = props;

  return (
    <div className="container-fluid" style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <Navbar />
      
      <div className="d-flex align-items-center justify-content-between p-5">
        Buy page
      </div>
    </div>
  );
};

export default SupportsPage;