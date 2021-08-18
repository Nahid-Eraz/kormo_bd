import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BannerImage from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center ">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Fade top duration={2500} distance="40px">
                        <h1>We Provide Services <br /> Anytime, Anywhere</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto voluptatum harum at officia totam veniam earum accusantium quibusdam. Repudiandae.</p>
                        <button className="btn-main" href="#">Start Now</button>
                    </Fade>
                </Col>
                <Col md={6} className="p-md-5 order-1 order-md-2">
                    <Fade bottom duration={2500} distance="40px">
                        <Image src={BannerImage} fluid/>
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;