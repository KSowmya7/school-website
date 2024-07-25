import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Springdale Public School</h5>
            <p>
              Springdale Public School is dedicated to providing quality education and holistic development to students. Established in 1985, our school offers a nurturing environment for young minds.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About Us</Link></li>
              <li><Link to="/academics" className="text-white">Academics</Link></li>
              <li><Link to="/admissions" className="text-white">Admissions</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <address>
              Springdale Public School<br />
              123 Education Lane, Cityville, State, ZIP Code<br />
              Phone: +1 (123) 456-7890<br />
              Email: <a href="mailto:info@springdale.edu" className="text-white">info@springdale.edu</a>
            </address>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 Springdale Public School. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

