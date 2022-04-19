import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="success" sticky='top' variant="dark">
          <Container>
          <Navbar.Brand href="#home">Guide For Outings</Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
      </>
    
    );
};

export default Header;