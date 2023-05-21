import React from 'react'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import moyLogo from '../imgs/moyLogo.png'

const Header = () => {
  return (
  <>
    <header>
      <Navbar className='custom-navbar' collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className='moylogo' src={moyLogo} alt="Facebook" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Professional Portfolio</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/pm">P.M.P.</Nav.Link>
              <Nav.Link eventKey={2} href="/fullstack"> FullStack Dev </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  )
}

export default Header