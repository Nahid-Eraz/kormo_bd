import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <section id="contact" className="contact-section">
            <Fade top>
                <Container>

                    <article className="text-center">
                        <h1>Contact Us</h1>
                        <h6>We want to hear from you!</h6>
                    </article>

                    <article col md={6}>
                        <form action="submit">
                            <Row className="input-container">

                                <Col xs={12}>
                                    <div className="styled-input wide">
                                        <input type="text" {...register("name", { required: true })} required />
                                        <label>Name</label>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="styled-input wide">
                                        <input type="text" {...register("email", { required: true })} required />
                                        <label>Email</label>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="styled-input wide">
                                        <input type="text" {...register("phone", { required: true })} required />
                                        <label>Phone/Mobile</label>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="styled-input wide">
                                        <textarea type="text" {...register("message", { required: true })} required />
                                        <label>Message</label>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <button className="btn-lrg submit-btn btn-main">Send Message</button>
                                </Col>

                            </Row>
                        </form>
                    </article>

                    <article col md={6}>
                        <img src="" alt="" />
                    </article>

                </Container>
            </Fade>
        </section>
    );
};

export default Contact;