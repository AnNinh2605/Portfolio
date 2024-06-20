import React from 'react';

const About = () => {
    return (
        <div className='bg-dark text-light min-vh-100' id='about'>
            {/* space hidden by nav fixed-top */}
            <div className="spacer" style={{ "height": "68px" }}></div>

            <div className='container'>
                <div className='row flex-column-reverse flex-md-row fade-in'>
                    <div
                        className='col-md-6 d-flex flex-column justify-content-center gap-3'
                        style={{ "height": "calc(100vh - 68px)" }}
                    >
                        <h1 className='text-center'>
                            Hi, I'm Ninh
                        </h1>
                        <p className='fs-5 text-indent'>
                            As a newcomer to the field of information technology, I am eager to enhance my skills and knowledge in ReactJS and NodeJS to become a full-stack developer.
                        </p>
                        <p className='fs-5'>
                            Additionally, I enjoy exploring new technologies and finding ways to apply them in both my work and daily life.
                        </p>
                        <div className='text-center '>
                            <a className='btn btn-lg btn-button rounded-pill'
                                href="/Le_Vu_An_Ninh_CV.pdf"
                                download="Le_Vu_An_Ninh_CV.pdf">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className='col-md-6 text-center my-auto mt-md-auto mt-4'>
                        <img src="/assets/avatar.jpg"
                            className="img-fluid rounded-circle border border-5 avatar-img"
                            alt="Avatar Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
