import React, { useState } from 'react';
import Navbar from '../../../containers/_nav@home';
import { CImg } from '@coreui/react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';  // Use useHistory instead of useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
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
    <>
    <div className="container-fluid" style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <Navbar />

      
    </div>
    </>
  );
};

export default ContactPage;
