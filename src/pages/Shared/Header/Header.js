import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './header.css'



const Header = () => {
    return (
        <div className='header '>
            <Navbar className='container navbar' collapseOnSelect expand="lg" bg="" variant="light">

                <Navbar.Brand className='text-dark' href="#home"><span className='logo'>H</span>ommie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex align-items-center ms-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Property</Nav.Link>
                        <Nav.Link href="#pricing">Service</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link href="/">
                            <button id='sign-in' className=''>Sign In</button>
                        </Nav.Link>
                        <Nav.Link href="/">
                            <button id='log-in'>Login</button>
                        </Nav.Link>

                    </Nav>
                    <Nav>


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>

    );
};

export default Header;