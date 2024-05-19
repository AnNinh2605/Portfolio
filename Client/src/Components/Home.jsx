import React, { useEffect, useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import './style.scss'

import ExperienceData from '../Data/Experience.json';
import ProjectData from '../Data/Project.json';
import SkillData from '../Data/Skill.json';

const Home = () => {
    const [experienceList, setExpericenceList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [skillList, setSkillList] = useState([]);

    // status for statuc after sending email in contact section
    const [status, setStatus] = useState('');
    // FormData for sending email in contact section
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

    useEffect(() => {
        setExpericenceList(ExperienceData);
        setProjectList(ProjectData);
        setSkillList(SkillData);
    }, [])

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
                            <img src="/assets/picture.jpg"
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
                        <div className="col-md-6 d-flex flex-wrap text-center">
                            {skillList && skillList.length > 0 && skillList.map((item, index) => {
                                return (
                                    <div key={`skill-${index}`} className='px-4'>
                                        <img src={item.image} className="img-fluid rounded-circle skill-img" alt={item.name}></img>
                                        <h3>{item.name}</h3>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                {experienceList && experienceList.length > 0 &&
                                    experienceList.map((item, index) => {
                                        return (
                                            <div key={`experience-${index}`} className='bg-secondary text-light border p-3 rounded'>
                                                <h4>{item.companyName}</h4>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        )
                                    })}
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
                    <div className='d-flex flex-column flex-md-row mt-3 gap-5'>
                        {projectList && projectList.length > 0 &&
                            projectList.map((item, index) => {
                                return (
                                    <div key={`projectList-${index}`} className="card col-md mb-4">
                                        <img src="/assets/project.jpg" className="card-img-top px-3 pt-2" alt="..." />
                                        <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                            <h5 className="card-title mb-0">{item.project_title}</h5>
                                            <p className="card-text mb-1">{item.description}</p>
                                            <div className='d-flex flex-wrap gap-2'>
                                                {item.button && item.button.length > 0 &&
                                                    item.button.map((item, index) => {
                                                        return (
                                                            <button key={`button-${index}`} className='btn btn-secondary btn-sm rounded-pill'>{item}</button>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className='d-flex justify-content-between gap-4'>
                                                <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                                <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
                                    <form onSubmit={handleSubmit}>
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
