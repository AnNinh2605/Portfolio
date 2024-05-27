import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link, Outlet, useLocation  } from "react-router-dom";

import './style.scss'

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="md"
                className="bg-body-tertiary fixed-top blue-bg-color"
                data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className='fs-3'>Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='fs-5 text-white gap-4'>
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === '/' ? 
                                'pb-0 border-bottom border-4 border-white': ''}`}
                            >
                                About
                            </Link>
                            <Link
                                to="/experience"
                                className={`nav-link ${location.pathname === '/experience' ? 
                                'pb-0 border-bottom border-4 border-white': ''}`}
                            >
                                Experience
                            </Link>
                            <Link
                                to="/project"
                                className={`nav-link ${location.pathname === '/project' ? 
                                'pb-0 border-bottom border-4 border-white': ''}`}
                            >
                                Project
                            </Link>
                            <Link
                                to="/contact"
                                className={`nav-link ${location.pathname === '/contact' ? 
                                'pb-0 border-bottom border-4 border-white': ''}`}
                            >
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

            <footer className="blue-bg-color text-white">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Contact information</h5>
                            <p>Email: anninh1511@gmail.com</p>
                            <p>Phone: (+84) 398708264</p>
                            <p>Address: Ho Chi Minh City</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Quick Links</h5>
                            <div className="col-md-6 text-md-right">
                                <ul
                                    className="list-inline d-flex justify-content-start gap-2">
                                    <li className="list-inline-item zoom-container">
                                        <a href="https://www.facebook.com/An.Ninh123"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-facebook fs-1 text-white"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item zoom-container">
                                        <a href="https://www.linkedin.com/in/le-vu-an-ninh"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-linkedin fs-1 text-white"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item zoom-container">
                                        <a href="https://github.com/AnNinh2605"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-github fs-1 text-white">
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='m-2' />
                    <div className="text-center">
                        <p className='mb-0'>&copy; 2024 Copyright by Ninh Le.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
