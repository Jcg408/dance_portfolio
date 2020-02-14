import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import "../css/menu.css"
const Menu = () => (
  <Navbar bg="transparent" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar" id='navbarLinks'>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">Bio</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/events">Events</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)

export default Menu