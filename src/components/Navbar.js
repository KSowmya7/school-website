// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const navItemStyle = {
    color: '#fff', // Change this color as desired
    fontWeight: 'bold',
    
  };

  return (
    <Navbar bg="danger"  variant="dark" expand="lg" data-bs-theme="dark">
      <img className='me-4 ml-2' 
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEuzPTVmUU7bALk9frqdUPZJjTNIZFqQVaQ&s'}  
        width="50" height="50" 
        alt="Logo" 
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='flex gap-4  around ml-2'>
          <Nav.Link as={Link} to="/" style={navItemStyle}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={navItemStyle}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/academics" style={navItemStyle}>Academics</Nav.Link>
          <Nav.Link as={Link} to="/admissions" style={navItemStyle}>Admissions</Nav.Link>
          <Nav.Link as={Link} to="/faculty" style={navItemStyle}>Faculty</Nav.Link>
          <Nav.Link as={Link} to="/students" style={navItemStyle}>Students</Nav.Link>
          <Nav.Link as={Link} to="/gallery" style={navItemStyle}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={navItemStyle}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
