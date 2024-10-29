import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';  // Use useHistory instead of useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/payment.css'


const PaymentPage = ({ location }) => {
  const history = useHistory();  // Initialize history
  const { state } = location;
  const { plan, price } = state || { plan: '', price: 0 }; // Default values if state is not available

  const [modal, setModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const toggleModal = () => setModal(!modal);

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Selected Payment Method:", paymentMethod);
    toggleModal();
  };

  const cancelBtn = () => {
    history.push('/products'); // Redirect to registration page
  };


  return (
    <>
    <div className="container fit">

      <div className='card border-0'>
      <div className="order-overview card-header">
        Payment For {plan}
        <span className="price ml-2">
          $ {price} USD
        </span>
      </div>

      <div className="payment-method">
        <p>PLEASE SELECT A PAYMENT METHOD</p>
      </div>
      <div className="card p-3">
        <p className="mb-1">CREDIT / DEBIT CARD</p>
        <Form onSubmit={handlePayment} className=''>
          <Row className="mb-3">
            <Col md={6}>
              <Label className="form-label text-primary" for="firstName">First name</Label>
              <Input className="form-control" id="firstName" required type="text" placeholder="John" />
            </Col>
            <Col md={6}>
              <Label className="form-label text-primary" for="lastName">Last name</Label>
              <Input className="form-control" id="lastName" required type="text" placeholder="Doe" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={8}>
              <Label className="form-label text-primary" for="cardNumber">Card number</Label>
              <Input className="form-control" id="cardNumber" required type="text" />
            </Col>
            <Col md={4}>
              <Label className="form-label text-primary" for="cvv">CVV</Label>
              <Input className="form-control" id="cvv" required type="text" />
            </Col>
          </Row>
          <Row className="mb-3 ml-5">
            <Col md={4} className="card-icons">
                <FontAwesomeIcon icon={faCcVisa} size='2x' className='mr-5'/>
            </Col>
            <Col md={4} className="card-icons">
                <FontAwesomeIcon icon={faCcMastercard} size='2x' className='mr-5'/>
            </Col>
            <Col md={4} className="card-icons">
                <FontAwesomeIcon icon={faCcPaypal} size='2x' className='mr-5'/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Label className="form-label text-primary" for="expiryMonth">Valid until</Label>
              <Input className="form-input" id="expiryMonth" required></Input>
            </Col>

          </Row>
          <div className="d-flex justify-content-between">
            <Button className="btn-cancel" type="button" onClick={(cancelBtn)}>
              Cancel
            </Button>
            <Button className="btn btn-success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
      </div>

      <Modal isOpen={modal } toggle={toggleModal}>
        <ModalBody>
          <h4>Payment Successful!</h4>
          <p>Thank you for your payment. Your subscription to {plan} has been activated.</p>
          <p>
            Our support team will send  you a confirmation email shortly.  
            If you have any questions, please don't hesitate to contact us.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  );
};

export default PaymentPage;
