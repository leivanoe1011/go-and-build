import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Begin Bootstrap Components
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// End Bootstrap Components

import logo from '../../media/GoAndBuildLogo_20220817.png'

import './services.css'

function NavScrollExample() {
  const imageStyle = {
    marginTop: '-1vw',
    marginBottom: '-2vw',
    width: '18vh',
    height: '18vh',
  }
  return (
    <Navbar fixed="top" collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home">
          <Nav.Link as={Link} style={imageStyle} eventKey="link-1" to="/">
            <img style={imageStyle} src={logo} />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: '1.25vw' }}
            navbarScroll
          >
            <Nav.Link
              className="nav-link thumbnail"
              as={NavLink}
              eventKey="link-2"
              to="/WhatWeDo"
            >
              WHAT WE DO
            </Nav.Link>
            <Nav.Link
              className="nav-link thumbnail"
              as={NavLink}
              eventKey="link-3"
              to="/OurWork"
            >
              OUR WORK
            </Nav.Link>
            <Nav.Link
              className="nav-link thumbnail"
              as={NavLink}
              eventKey="link-3"
              to="/ContactUs"
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="text-center pt-md-2 d-none d-sm-none d-md-none">
          <div givebutter-element-id="xLvdap"></div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
