import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import AboutImage from '../../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <Container fluid className="mt-3">

            <article>
                <Fade top>
                    <div className="text-center">
                        <span style={{color: "#e7388f"}}>About Us</span>
                        <h2>How We Can Help You</h2>
                    </div>
                </Fade>
            </article>

            <article>
                <Row className="align-items-center justify-content-evenly">
                    <Col md={6}>
                        <Fade left duration={2500} distance="40px">
                            <Image src={AboutImage} fluid />
                        </Fade>
                    </Col>

                    <Col md={3} className="p-md-5 about-background">
                        <Fade right duration={2500} distance="40px">
                            <h3>We Believe in SSS <br /> Satisfaction, Safety & Security</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint ullam eum porro eaque doloremque ducimus soluta architecto nostrum, laudantium sunt nisi adipisci natus. Nulla consectetur maxime fugit labore ipsam rerum tempora eaque vero ea!</p>
                        </Fade>
                    </Col>
                </Row>
            </article>
        </Container>
    );
};

export default About;