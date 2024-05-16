import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavBar() {


  const logout = () => {
    localStorage.setItem("token", "");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/purchases">Menu</Nav.Link>
          <Nav.Link >Cart(sidevar)</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavBar