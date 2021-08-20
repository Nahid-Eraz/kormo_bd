import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ServiceDetail = ({ service }) => {



    return (
        <Col md={3} className="text-center">
            <Fade bottom>
                <Card className="border-0 py-4" style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '100px', width: '100px', marginLeft: '93px' }}variant="top" src={service.img} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>

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