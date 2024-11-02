import React, { useState } from 'react';
import Navbar from '../../../containers/_nav@home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

const SupportsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here you can send formData to your backend or API
    alert('Support request sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
<>
<Navbar />
  <div className="container-fluid mr-5 mt-2">
    <h3 className="text-center mb-4">Support</h3>
    <div className="row">

      <div className="col-sm-2 border">
        <ul className="nav flex-column mt-5">
          <li className="nav-item">
            <a className="nav-link m2y2-hover active" href="/faqs">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/docs">Documentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m2y2-hover" href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      
      <div className="col-sm-9">
        <div id="faq">
          <h4>Frequently Asked Questions</h4>
          <div className="accordion" id="faqAccordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span className='text-primary'>How do I add a new product?</span>
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                  Go to the inventory page, click on "Add Product," and fill in the required details.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <span className='text-primary'>How can I view sales history?</span>
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                <div className="card-body">
                  Visit the "Sales" section under your dashboard to view the history of all sales transactions.
                </div>
              </div>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>

        <div id="docs">
          <h4>Documentation</h4>
          <ul>
            <li><a href="/docs/adding-products" target="_blank" rel="noopener noreferrer">Adding Products</a></li>
            <li><a href="/docs/managing-inventory" target="_blank" rel="noopener noreferrer">Managing Inventory</a></li>
            <li><a href="/docs/troubleshooting" target="_blank" rel="noopener noreferrer">Troubleshooting</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default SupportsPage;