import React, { useState } from 'react';
import Navbar from '../../../containers/_nav@home';
import { CImg } from '@coreui/react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';  // Use useHistory instead of useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();  // Initialize history

  // Toggle the modal visibility
  const toggleModal = () => setModalOpen(!modalOpen);

  // Handle confirm to redirect to trial registration page
  const handleConfirm = () => {
    setModalOpen(false); // Close modal
    history.push('/trial-register'); // Redirect to registration page
  };

  return (
    <div className="container-fluid" style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <Navbar />

      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#017abf' }}>Choose Your Plan</h2>

        <div className="row">
          {/* Basic Plan */}
          <div className="card shadow mr-2 mb-4">
            <div className="card border-0">
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-weight-bold">Basic Plan</h5>
                <h6 className="card-price display-4 mb-3" style={{ color: '#017abf' }}>$19<span className="text-muted" style={{ fontSize: '1rem' }}> / mo</span></h6>
                <ul className="list-unstyled">
                  <li>Inventory Management</li>
                  <li>Standard Analytics</li>
                  <li>Email Support</li>
                </ul>
              </div>
              <button
                onClick={toggleModal}
                className="btn btn-info mt-3 w-100 m2y2-hover"
                style={{ borderRadius: '5px', fontWeight: 'bold' }}
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="card shadow mr-2 mb-4">
            <div className="card border-0">
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-weight-bold">Standard Plan</h5>
                <h6 className="card-price display-4 mb-3" style={{ color: '#017abf' }}>$49<span className="text-muted" style={{ fontSize: '1rem' }}> / mo</span></h6>
                <ul className="list-unstyled">
                  <li>Inventory Management</li>
                  <li>Standard Analytics</li>
                  <li>Multi-user Access</li>
                  <li>Email Support</li>
                </ul>
              </div>
              <button className="btn btn-info mt-3 w-100 m2y2-hover" style={{ borderRadius: '5px', fontWeight: 'bold' }}>Buy Now</button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card shadow mr-2 mb-4">
            <div className="card border-0">
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-weight-bold">Premium Plan</h5>
                <h6 className="card-price display-4 mb-3" style={{ color: '#017abf' }}>$99<span className="text-muted" style={{ fontSize: '1rem' }}> / mo</span></h6>
                <ul className="list-unstyled">
                  <li>Inventory Management</li>
                  <li>Advanced Analytics</li>
                  <li>Multi-user Access</li>
                  <li>Dedicated Support</li>
                </ul>
              </div>
              <button className="btn btn-info mt-3 w-100 m2y2-hover" style={{ borderRadius: '5px', fontWeight: 'bold' }}>Buy Now</button>
            </div>
          </div>
        </div>

        {/* Modal for Free Trial Confirmation */}
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalBody>
            <h5>Start Your Free Trial</h5>
            <p>Would you like to start a 7-day free trial for the Basic Plan?</p>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-info" onClick={handleConfirm}>Confirm</button>
            <button className="btn btn-secondary" onClick={toggleModal}>Cancel</button>
          </ModalFooter>
        </Modal>

        <div className="text-center mt-4">
          <a href="#" className="text-info" style={{ textDecoration: 'underline' }}>Compare Plans</a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
