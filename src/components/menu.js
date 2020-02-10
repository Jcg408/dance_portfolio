import React from 'react'
import {Navbar, Nav,  Form, FormControl, Button} from 'react-bootstrap'
import "../css/menu.css"
const Menu = () => (
  <Navbar bg="transparent" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar" id='navbarLinks'>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)

export default Menu