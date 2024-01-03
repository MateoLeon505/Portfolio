import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = ()  => {

  return (
    <Navbar expand="lg" 
    //className="bg-body-tertiary"
    >
      <Container>
        <span className='navbar-toggler-icon'></span>
        <Navbar.Brand href="#home">
          <img src="" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#proyects">Proyects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src="" alt="Linkedin" /></a>
              <a href="#"><img src="" alt="Github" /></a>
              <a href="#"><img src="" alt="Stack Overflow" /></a>
              <button></button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
