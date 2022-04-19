import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar bg="success" sticky='top' variant="dark">
        <Container>
          <Navbar.Brand href="#home">Guide For Outings</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            {
              user ?
                <button onClick={handleSignOut}>Sign Out</button>
              :
              <Nav.Link as={Link} to="login">Login</Nav.Link>

            }
          </Nav>
        </Container>
      </Navbar>

    </>

  );
};

export default Header;