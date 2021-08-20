import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {



    return (
        <Col md={3} className="text-center service-detail mb-5">
            <Fade bottom duration={2500} distance="40px">
                <Card className="border-0 py-4" style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '100px', width: '100px', marginLeft: '103px' }} variant="top" src={service.img} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h4" className="my-4">{service.name}</Card.Title>
                        <Card.Text as="p" className="text-muted">{service.description}</Card.Text>

                        <article>
                            <p>{service.price}</p>
                            <button className="btn-main">Book</button>
                        </article>

                    </Card.Body>
                </Card>
            </Fade>
        </Col>
    );
};

export default ServiceDetail;