import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import CustomerService from '../../../images/247.jpg';
import RapidResponse from '../../../images/rapid.jpg';
import Worker from '../../../images/worker1.jpg';

const BusinessModel = () => {
    return (
        <Container fluid className="mt-5">

            <article>
                <Fade top>
                    <div className="text-center">
                        <span style={{ color: "#e7388f" }}>Our Speciality</span>
                        <h2>Why You Choose Us</h2>
                    </div>
                </Fade>
            </article>

            <article>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <LightSpeed>
                            <Row className="align-items-center justify-content-center ">
                                <Col md={4} className="p-md-5 order-2 order-md-1">
                                    <Fade top duration={2500} distance="40px">
                                        <h1 style={{ color: "#e7388f" }}>24/7 <br /> Services</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto voluptatum harum at officia totam veniam earum accusantium quibusdam. Repudiandae.</p>
                                    </Fade>
                                </Col>
                                <Col md={6} className="p-md-5 order-1 order-md-2">
                                    <Fade bottom duration={2500} distance="40px">
                                        <Image src={CustomerService} fluid />
                                    </Fade>
                                </Col>
                            </Row>
                        </LightSpeed>
                    </Carousel.Item>

                    <Carousel.Item>
                        <LightSpeed>
                            <Row className="align-items-center justify-content-center ">
                                <Col md={4} className="p-md-5 order-2 order-md-1">
                                    <Fade top duration={2500} distance="40px">
                                        <h1 style={{ color: "#e7388f" }}>Rapid <br /> Response</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto voluptatum harum at officia totam veniam earum accusantium quibusdam. Repudiandae.</p>
                                    </Fade>
                                </Col>
                                <Col md={6} className="p-md-5 order-1 order-md-2">
                                    <Fade bottom duration={2500} distance="40px">
                                        <Image src={RapidResponse} fluid />
                                    </Fade>
                                </Col>
                            </Row>
                        </LightSpeed>
                    </Carousel.Item>

                    <Carousel.Item>
                        <LightSpeed>
                            <Row className="align-items-center justify-content-center ">
                                <Col md={4} className="p-md-5 order-2 order-md-1">
                                    <Fade top duration={2500} distance="40px">
                                        <h1 style={{ color: "#e7388f" }}>Vast <br /> Worker</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto voluptatum harum at officia totam veniam earum accusantium quibusdam. Repudiandae.</p>
                                    </Fade>
                                </Col>
                                <Col md={6} className="p-md-5 order-1 order-md-2">
                                    <Fade bottom duration={2500} distance="40px">
                                        <Image src={Worker} fluid />
                                    </Fade>
                                </Col>
                            </Row>
                        </LightSpeed>
                    </Carousel.Item>
                </Carousel>
            </article>
        </Container>
    );
};

export default BusinessModel;