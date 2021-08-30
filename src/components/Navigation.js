import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import brandLogo from '../assets/uxcellent.png';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex">
            <img 
              src={brandLogo}
              alt="Sample Brand Logo"
              width="50"
              className="align-top d-inline-block"
              height="50"
            />
            <span>&nbsp;</span>
            <div className="text-size-6 align-self-center ml-2" id="logo-text"> UXCellent</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#academy">Academy</Nav.Link>
            <Nav.Link href="#webinar">Webinar</Nav.Link>
            <Nav.Link href="#webinar">Digital Product Development Conference</Nav.Link>
            <Button className="navbar-button" variant="warning">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigation;