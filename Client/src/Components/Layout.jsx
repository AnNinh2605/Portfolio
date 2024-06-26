import React, { useEffect, useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

import About from './About';
import Contact from './Contact'
import Experience from './Experience'
import Project from './Project'
import NotFound from './NotFound';

import './style.scss'

const Layout = () => {
    const [component, setComponent] = useState('about');

    const childComponent = () => {
        switch (component) {
            case 'about':
                return <About></About>
            case 'experience':
                return <Experience></Experience>
            case 'project':
                return <Project></Project>
            case 'contact':
                return <Contact></Contact>
            default:
                return <NotFound></NotFound>
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [component]);

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="md"
                className="bg-body-tertiary fixed-top blue-bg-color"
                data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className='fs-3'>My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='fs-5 text-white gap-4'>
                            <div
                                onClick={() => setComponent('about')}
                                className={component.includes('about') ?
                                    'pb-0 border-bottom border-4 border-white cursor' : 'cursor'}
                            >
                                About
                            </div>
                            <div
                                onClick={() => setComponent('experience')}
                                className={component.includes('experience') ?
                                    'pb-0 border-bottom border-4 border-white cursor' : 'cursor'}
                            >
                                Experience
                            </div>
                            <div
                                onClick={() => setComponent('project')}
                                className={component.includes('project') ?
                                    'pb-0 border-bottom border-4 border-white cursor' : 'cursor'}
                            >
                                Project
                            </div>
                            <div
                                onClick={() => setComponent('contact')}
                                className={component.includes('contact') ?
                                    'pb-0 border-bottom border-4 border-white cursor' : 'cursor'}
                            >
                                Contact
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {childComponent()}

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
        </div>
    );
}

export default Layout;
