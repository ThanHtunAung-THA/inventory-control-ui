import React, { useState } from 'react';
import Navbar from '../../../containers/_nav@home';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subj: '',
    msg: '',
  });

  // Update state on form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, subj, msg } = formData;

    // Use EmailJS to send the email
    emailjs.send('service_xkn3o1r', 'template_6hgccal', {
      from_name: name,
      from_email: email,
      subject: subj,
      message: msg,
    }, 'fvlTx8Qgv2Fpffkl1')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          subj: '',
          msg: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="container-fluid" style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <Navbar />

      <div className="container ">
        <div className='row pt-2'>

          <div className='col-md-7'>
            <div className='card p-4 mb-5 bg-primary text-light'>  
              <h4>Get in Touch</h4>
              <p>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
            </div>
            <div className='card p-4' style={{marginTop:'4rem'}}>
              <h4>Contact Information</h4>
              <p>
                Address: 123 Main St, Anytown, USA 12345<br />
                Phone 1: (+959) 798174380<br />
                Phone 2: (+959) 974847753<br />
                Phone 2: (+66) 0634711557<br />
                Email: <a href="mailto:t.thantunaung@gmail.com">info@m2y2.com</a>
              </p>
            </div>
          </div>
          
          <div className="card">
            <h4 className='card-header bg-white'>Send a Message</h4>
            <Form onSubmit={sendEmail}>
              <FormGroup>
                <Label for="name" className='text-primary'>Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className='text-primary'>Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="subj" className='text-primary'>Subject</Label>
                <Input
                  type="text"
                  id="subj"
                  name="subj"
                  placeholder="Subject"
                  value={formData.subj}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="msg" className='text-primary'>Message</Label>
                <Input
                  type="textarea"
                  id="msg"
                  name="msg"
                  placeholder="Your Message"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary" className="px-4 mb-3 d-block ml-auto m2y2-hover">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;