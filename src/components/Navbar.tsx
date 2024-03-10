import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const NavbarComp = () => {
  const [navbarColor, setNavbar] = useState(false);

  const ChangeNavbarBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", ChangeNavbarBg);

  return (
    <>
      <Navbar
        id="navbar"
        expand="lg"
        className={navbarColor ? "navbar active" : "navbar"}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ color: "#270d2e", fontSize: "25px" }}
          >
            My portfolio page
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ fontSize: "20px" }} to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link style={{ fontSize: "20px" }} to="/contact" as={Link}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
