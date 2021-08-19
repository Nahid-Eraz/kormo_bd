import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import AcWash from '../../../images/service image/ac-repair.png';
import RoomClean from '../../../images/service image/room-clean.png';
import ClothWash from '../../../images/service image/washing-clothes.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

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
]


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(serviceData);
    }, [])

    return (
        <section className="text-center py-5">

            <article className="mt-5">
                <Fade bottom>
                    <div className="text-center">
                        <span style={{ color: "#e7388f" }}>Our Services</span>
                        <h2>Our Services We Provide</h2>
                    </div>
                </Fade>
            </article>

            <article>
                <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </Row>
            </article>

        </section>
    );
};

export default Services;