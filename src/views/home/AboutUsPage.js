import React from 'react';
import Navbar from '../../containers/_nav@home';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUsPage = () => {

  return (
<>
  <Navbar />
  <div className="container p-2" >
    
    <div className="mt-2">
      <div className="">
        <div className="row card p-4">
            <h3 className="card-title card-title-about ">About Our Stock Management System</h3>
            <p className="card-text" >
                Our Stock Management System is designed to help businesses efficiently manage their inventory, ensuring optimal stock levels and reducing excess inventory costs. With a user-friendly interface and powerful features, our system is tailored to meet the needs of businesses across various industries.
            </p>
            <p className="card-text" >
                We leverage cutting-edge technology to provide real-time insights into stock levels, sales trends, and supply chain performance. Our system empowers businesses to make data-driven decisions, enhancing operational efficiency and improving customer satisfaction.
            </p>
            <h3 className="card-title card-title-about ">Key Features</h3>
            <ul className="card-text ml-4">
              <li><strong>Real-Time Inventory Tracking:</strong> Monitor stock levels in real-time to prevent stockouts and overstock situations.</li>
              <li><strong>Automated Reordering:</strong> Set reorder points and automate purchase orders to maintain optimal inventory levels.</li>
              <li><strong>Comprehensive Reporting:</strong> Generate detailed reports on inventory performance, sales trends, and forecasting.</li>
              <li><strong>Multi-Location Management:</strong> Manage inventory across multiple locations seamlessly, ensuring centralized control.</li>
              <li><strong>User-Friendly Interface:</strong> Intuitive design that makes it easy for users to navigate and utilize the system effectively.</li>
            </ul>
            <h3 className="card-title card-title-about ">Our Commitment</h3>
            <p className="card-text" >
                We are committed to continuous improvement and innovation. Our team is dedicated to enhancing our Stock Management System to meet the evolving needs of our users. We prioritize customer feedback and strive to provide exceptional support to ensure our clients get the most out of our system.
            </p>
          </div>
      </div>      
    </div>
  </div>
</>
  );
};

export default AboutUsPage;