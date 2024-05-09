import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

import './style.scss'

const Home = () => {
    return (
        <>
            <div className='bg-dark text-light vh-100' id='about'>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#about" className='fs-3 text ms-1'>Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav className='fs-5 text gap-4'>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                                <Nav.Link href="#project">Project</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* space hidden by nav fixed-top */}
                <div class="spacer" style={{ "height": "68px" }}></div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6 d-flex flex-column justify-content-center gap-4'>
                            <h1>
                                Hi, I'm Ninh
                            </h1>
                            <p className='fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint, numquam asperiores sed sit facere accusamus, inventore odit, repellat repudiandae distinctio nulla saepe reprehenderit quaerat porro minus amet tempora enim?
                            </p>
                            <div>
                                <button className='btn btn-lg btn-primary' type="button">Contact Me</button>
                            </div>
                        </div>

                        <div className='col-6 d-flex justify-content-center align-items-center' style={{ "height": "calc(100vh - 68px)" }}>
                            <div className='avatar_picture'>
                                <img src="src/assets/picture.jpg" className="img-fluid responsive-img" alt="Avatar Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-light text-dark vh-100' id='experience'>
                {/* space hidden by nav fixed-top */}
                <div class="spacer" style={{ "height": "68px" }}></div>

                <div className='container'>
                    <div className="row">
                        <div className="col-6" style={{ "height": "calc(100vh - 68px)" }}>
                            <h1>Experience</h1>

                            <div className="d-flex flex-wrap">
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='px-3'>
                                    <div className='skill_picture'>
                                        <img src='src/assets/skill_img/javascript.jpg' className="img-fluid responsive-img" alt="Skill Image"></img>
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className='mt-5 d-flex flex-column gap-3'>
                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <div className='col-2 bg-success'>
                                        {/* <div style={{ "height": "100%", "width": "100%" }}>
                                        </div> */}
                                    </div>
                                    <div className='col-10'>
                                        <h4>Company</h4>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum.
                                    </div>
                                </div>

                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <div>

                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum. Veniam odit unde ex facere distinctio saepe voluptatum ut modi commodi pariatur!
                                </div>

                                <div className='bg-secondary text-light border p-3 rounded'>
                                    <div>

                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus repellat repellendus eligendi consectetur autem officia sunt laborum. Veniam odit unde ex facere distinctio saepe voluptatum ut modi commodi pariatur!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-dark text-white vh-100' id='project'>
                {/* space hidden by nav fixed-top */}
                <div class="spacer" style={{ "height": "68px" }}></div>
                <div className="container">
                    <h1>Projects</h1>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2 rounded" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2 rounded" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="src/assets/project.jpg" className="card-img-top px-3 pt-2 rounded" alt="..." />
                            <div className="card-body d-flex flex-column gap-2 px-3 py-2">
                                <h5 className="card-title mb-0">Project Title</h5>
                                <p className="card-text mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non posuere sapien. Sed at justo nec ex iaculis vestibulum.</p>
                                <div className='d-flex flex-wrap gap-2'>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>NodeJs</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Express</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>MongoDB</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>React</button>
                                    <button className='btn btn-secondary btn-sm rounded-pill'>Bootstrap</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Demo</a>
                                    <a href="#" className="btn btn-primary btn-sm rounded-pill w-50">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-light text-dark vh-100' id='contact'>
                {/* space hidden by nav fixed-top */}
                <div class="spacer" style={{ "height": "68px" }}></div>

                <div className="container">
                    <section id="contact" class="contact-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 mx-auto text-center">
                                    <h2 class="section-heading mt-2">Liên Hệ</h2>
                                    <hr class="my-2" />
                                    <p class="mb-2">Bạn có câu hỏi hoặc muốn làm việc cùng tôi? Đừng ngần ngại liên hệ ngay!</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 mx-auto">
                                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Tên</label>
                                                <input class="form-control" id="name" type="text" placeholder="Tên của bạn" required="required" data-validation-required-message="Vui lòng nhập tên của bạn."></input>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Email</label>
                                                <input class="form-control" id="email" type="email" placeholder="Địa chỉ Email của bạn" required="required" data-validation-required-message="Vui lòng nhập địa chỉ email của bạn."></input>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Tiêu đề</label>
                                                <input class="form-control" id="subject" type="text" placeholder="Tiêu đề tin nhắn" required="required" data-validation-required-message="Vui lòng nhập tiêu đề tin nhắn."></input>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0">
                                                <label>Nội dung</label>
                                                <textarea class="form-control" id="message" rows="3" placeholder="Nội dung tin nhắn" required="required" data-validation-required-message="Vui lòng nhập nội dung tin nhắn."></textarea>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-xl w-25" id="sendMessageButton">Gửi</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <footer className="bg-dark text-white">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Thông tin liên hệ</h5>
                            <p>Email: anninh1511@gmail.com</p>
                            <p>Điện thoại: (+84) 398708264</p>
                            <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Liên kết</h5>
                            <div className="col-md-6 text-md-right">
                                <ul className="list-inline d-flex justify-content-start gap-2">
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fab fa-github"></i></a>
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
