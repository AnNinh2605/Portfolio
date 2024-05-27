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
                            As a newcomer to the field of information technology, I am eager to enhance my skills and knowledge to become a web developer. I aspire to apply the theoretical knowledge I have acquired to practical projects.
                        </p>
                        <p className='fs-5'>
                            Besides that, I usually spend time exploring something new in technology to apply it to work and daily life.
                        </p>
                        <div className='text-center '>
                            <a className='btn btn-lg btn-button rounded-pill'
                                href="/Fresher_Backend_Engineer_Le_Vu_An_Ninh.pdf"
                                download="Fresher_Backend_Engineer_Le_Vu_An_Ninh.pdf">
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
