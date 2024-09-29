import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './App.css'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  return (
   <>
     <Navbar bg="dark" data-bs-theme="dark" expand="lg">
  <Container className='justify-content-between'>
    <Navbar.Brand href="#home">
      <i class="fa-sharp fa-solid fa-earth-americas fa-2xl"></i>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className='hover-style rounded' href="#home">Destinations</Nav.Link>
        <Nav.Link className='hover-style rounded' href="#features">Hotels</Nav.Link>
        <Nav.Link className='hover-style rounded' href="#Flights">Flights</Nav.Link>
        <Nav.Link className='hover-style rounded' href="#home">Bookings</Nav.Link>
        <Nav.Link className='hover-style rounded' onClick={handleShow} href="#features">Login</Nav.Link>
        <Nav.Link className='hover-style rounded' onClick={handleShow2} href="#Flights">Register</Nav.Link>
        <Nav.Link className='hover-style rounded ms-5' href="#destination">
          <select id="destinations" name="destinations" className="form-select">
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="chinese">Chinese</option>
            <option value="spanish">Spanish</option>
          </select>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* registration form modal*/}
      
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Register here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel className='mb-3' controlId="floatingName" label="Full Name">
        <Form.Control type="text" placeholder="Enter Name" />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Header
