import React from 'react';
import About from '../About/About';
import BusinessModel from '../BusinessModel/BusinessModel';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <About></About>
            <Services></Services>
            <BusinessModel></BusinessModel>
            <Contact></Contact>
        </main>
    );
};

export default Home;