import React from 'react'
import {Navbar, Nav,  Button} from 'react-bootstrap'
import "../css/menu.css"
const Menu = () => (
  <Navbar bg="transparent" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar" id='navbarLinks'>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Me</Nav.Link>
      <Nav.Link href="#link">Projects</Nav.Link>
      <Nav.Link href="#link">News</Nav.Link>
      <Nav.Link href="#link">Contact Me</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)

export default Menu