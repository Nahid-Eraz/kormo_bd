// import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
// import toast, { Toaster } from 'react-hot-toast';
import AcWash from '../../../images/service image/ac-repair.png';
import RoomClean from '../../../images/service image/room-clean.png';
import ClothWash from '../../../images/service image/washing-clothes.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import OverflowScrolling from 'react-overflow-scrolling';
import './Services.css';
const serviceData = [
    {
        name: 'Ac Repair',
        img: AcWash,
        description: 'sadfsadfjksadjkfhjsakdhfkjsadhfksadsadsadasdsadasdagfdsafafjh',
        price: '100'
    },
    {
        name: 'Room Clean',
        img: RoomClean,
        description: 'sadfsadfjksadjkfhjsakdhfkjsadhfksadsadsadasdsadasdagfdsafafjh',
        price: '200'
    },
    {
        name: 'Cloth Wash',
        img: ClothWash,
        description: 'sadfsadfjksadjkfhjsakdhfkjsadhfksadsadsadasdsadasdagfdsafafjh',
        price: '50'
    },
    {
        name: 'Room Clean',
        img: RoomClean,
        description: 'sadfsadfjksadjkfhjsakdhfkjsadhfksadsadsadasdsadasdagfdsafafjh',
        price: '200'
    },
    {
        name: 'Ac Repair',
        img: AcWash,
        description: 'sadfsadfjksadjkfhjsakdhfkjsadhfksadsadsadasdsadasdagfdsafafjh',
        price: '100'
    }
]


const Services = () => {

    // const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(serviceData);
    }, [])

    return (
        <section className="services-container text-center py-3">

            <article className="mt-5">
                <Fade bottom>
                    <div className="text-center">
                        <span style={{ color: "#e7388f" }}>Our Services</span>
                        <h2>Our Services We Provide</h2>
                    </div>
                </Fade>
            </article>

            <Container className="mt-3">
                <article>
                    <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                        {
                            services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                    </Row>
                </article>
            </Container>

        </section>
    );
};

export default Services;