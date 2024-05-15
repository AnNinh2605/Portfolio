import React, { useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import './style.scss'

const Home = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_ibvqto5',     // Thay thế bằng ID dịch vụ EmailJS của bạn
                'template_eljkdm8',    // Thay thế bằng ID mẫu EmailJS của bạn
                {
                    ...formData,
                    to_name: "Ninh",
                    from_name: formData.name,
                    from_email: formData.email,
                },
                '3f9pLHe23sIlPiuj9');    // Thay thế bằng Public Key của bạn (YOUR_USER_ID)

            setStatus('SUCCESS');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus('FAILED');
        }
    };

    return (
        <>
            <div className='bg-dark text-light min-vh-100' id='about'>
                <Navbar collapseOnSelect expand="md" className="bg-body-tertiary fixed-top blue-bg-color" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#about" className='fs-3'>Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav className='fs-5 text-white gap-4'>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                                <Nav.Link href="#project">Project</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* space hidden by nav fixed-top */}
                <div className="spacer" style={{ "height": "68px" }}></div>

                <div className='container'>
                    <div className='row flex-column-reverse flex-md-row'>
                        <div
                            className='col-md-6 d-flex flex-column justify-content-center gap-3'
                            style={{ "height": "calc(100vh - 68px)" }}
                        >
                            <h1 className='text-center'>
                                Hi, I'm Ninh
                            </h1>
                            <p className='fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint, numquam asperiores sed sit facere accusamus, inventore odit, repellat repudiandae distinctio nulla saepe reprehenderit quaerat porro minus amet tempora enim?
                            </p>
                            <div className='text-center'>
                                <a className='btn btn-lg btn-primary'
                                    href="/Fresher_Backend_Engineer_Le_Vu_An_Ninh.pdf"
                                    download="Fresher_Backend_Engineer_Le_Vu_An_Ninh.pdf">
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        <div className='col-md-6 text-center my-auto'>
                            <img src="src/assets/picture.jpg"
                                className="img-fluid rounded-circle mt-4 avatar-img"
                                alt="Avatar Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-light text-dark min-vh-100' id='experience'>
                {/* space hidden by nav fixed-top */}
                <div className="spacer" style={{ "height": "68px" }}></div>

                <div className='container pb-4'>
                    <div className="row">
                        <h1>Experience</h1>
                        <div className="col-md-6 d-flex justify-content-between flex-wrap text-center">
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                <h3>Javascript</h3>
                            </div>
                            <div className='px-4'>
                                <div className='skill_picture'>
                                    <img src='src/assets/skill_img/javascript.jpg' className="img-fluid rounded-circle skill-img" alt="Skill Image"></img>
                                </div>
                                <h3>Javascript</h3>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <h4>Company</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum.
                                    </p>
                                </div>

                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <h4>Company</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum.
                                    </p>
                                </div>

                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <h4>Company</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-dark text-white min-vh-100' id='project'>
                {/* space hidden by nav fixed-top */}
                <div className="spacer" style={{ "height": "68px" }}></div>

                <div className="container pb-4">
                    <h1>Projects</h1>
                    <div className='d-flex flex-column flex-md-row justify-content-between mt-3'>
                        <div className="card col-md-3 mb-4">
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap justify-content-between gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between gap-4'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>

                        <div className="card col-md-3 mb-4">
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap justify-content-between gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between gap-4'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>

                        <div className="card col-md-3 mb-4">
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap justify-content-between gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between gap-4'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-light text-dark min-vh-100' id='contact'>
                {/* space hidden by nav fixed-top */}
                <div className="spacer" style={{ "height": "68px" }}></div>

                <div className="container">
                    <section id="contact" className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <h2 className="section-heading mt-2">Contact</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mx-auto mb-4">
                                    <form
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Your name</label>
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    required
                                                    data-validation-required-message="Please enter your name."
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                ></input>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Email</label>
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    data-validation-required-message="Please enter your email."
                                                ></input>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Title</label>
                                                <input
                                                    className="form-control"
                                                    id="subject"
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Message title"
                                                    required
                                                    data-validation-required-message="Please enter message title."
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                ></input>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Content</label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows="3"
                                                    placeholder="Message content"
                                                    required
                                                    data-validation-required-message="Please enter message content."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-xl w-25" >Send</button>
                                        </div>
                                        {status === 'SUCCESS' &&
                                            window.alert("Your message was sent successfully!")
                                        }
                                        {status === 'FAILED' &&
                                            window.alert("Failed to send your message. Please try again.")
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <footer className="blue-bg-color text-white">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Contact information</h5>
                            <p>Email: anninh1511@gmail.com</p>
                            <p>Phone: (+84) 398708264</p>
                            <p>Address: 123 street ABC, district XYZ, HCM city</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Quick Links</h5>
                            <div className="col-md-6 text-md-right">
                                <ul className="list-inline d-flex justify-content-start gap-2">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/An.Ninh123"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-facebook fs-1"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/le-vu-an-ninh"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-linkedin fs-1"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://github.com/AnNinh2605"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-github fs-1"></i>
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

export default Home;
