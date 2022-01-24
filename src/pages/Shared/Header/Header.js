import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './header.css'



const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div className='header px-lg-4 sticky-top '>
            <Navbar className='container-fluid px-3 navbar' collapseOnSelect expand="lg" bg="" variant="light">

                <Navbar.Brand className='text-dark' href="#home"><span className='logo'>H</span> ||ommie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex align-items-center ms-auto">
                        <Link style={{ textDecoration: 'none', color: 'black' }} className='p-3' to='/home'>Home</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} className='p-3' to='/property'>Property</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} className='p-3 me-3' to='/about'>About</Link>

                        {
                            user.email ? '' :
                                <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' to='/register'>
                                    <button id='sign-in' className=''>Sign In</button>
                                </Link>
                        }
                        {
                            user.email ? <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                                <button onClick={logOut} className='fw-bold' id='log-in'>Logout</button>
                            </Link> :
                                <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                                    <button className='fw-bold' id='log-in'>Login</button>
                                </Link>
                        }

                    </Nav>
                    <Nav>


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>

    );
};

export default Header;