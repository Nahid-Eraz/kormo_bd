import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import './Contact.css';
import ContactUs from '../../../images/contact.jpg';

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

                    <article>
                        <form action="submit">
                            <Row className="input-container justify-content-center">

                                <Col md={5}>
                                    <div className="styled-input wide">
                                        <input type="text" {...register("name", { required: true })} required />
                                        <label>Name</label>
                                    </div>

                                    <div className="styled-input wide">
                                        <input type="text" {...register("email", { required: true })} required />
                                        <label>Email</label>
                                    </div>

                                    <div className="styled-input wide">
                                        <input type="text" {...register("phone", { required: true })} required />
                                        <label>Phone/Mobile</label>
                                    </div>

                                    <div className="styled-input wide">
                                        <textarea type="text" {...register("message", { required: true })} required />
                                        <label>Message</label>
                                    </div>

                                    <div>
                                        <button className="btn-lrg submit-btn btn-main">Send Message</button>
                                    </div>
                                </Col>

                                <Col md={6} className="mt-3">
                                    <Image style={{height: "86%", width: "100%"}} src={ContactUs} fluid />
                                </Col>


                            </Row>
                        </form>
                    </article>

                </Container>
            </Fade>
        </section>
    );
};

export default Contact;