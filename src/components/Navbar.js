import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (

  
    <Navbar bg="white" expand="lg" className="shadow-sm py-3 fixed-top">
      <Container>
        
        <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center fs-2">
  {/* Logo image */}
  <img
    src={"images/logo.png"}
    alt="Japan Quest Logo"
    width="100"
    height="90"
    className="me-2 d-inline-block align-top"
  />
  <span className="brand-text">Japan Quest</span>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" className="custom-hamburger" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/tours"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              Tours
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Testimonials"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/TourGuides"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              Our Tour Guides
            </Nav.Link>
                        <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "text-danger fw-bold" : "text-dark")}
            >
              About
            </Nav.Link>
            <Button
              as={NavLink}
              to="/booking"
              variant="danger"
              className=" btn-brown ms-3 px-4 fw-semibold"
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
