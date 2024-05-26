import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

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

    return (
        <div className='bg-light text-dark min-vh-100' id='contact'>
            {/* space hidden by nav fixed-top */}
            <div className="spacer" style={{ "height": "68px" }}></div>

            <div className="container">
                <section id="contact" className="contact-section">
                    <div className="container fade-in">
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
                                                placeholder="Your name"
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
                                                placeholder="Your email"
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
                                        <button type="submit" className="btn btn-button btn-xl w-25" >SEND</button>
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
    );
}

export default Contact;
