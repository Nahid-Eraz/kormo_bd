import React from 'react';
import About from '../About/About';
import BusinessModel from '../BusinessModel/BusinessModel';
import Header from '../Header/Header';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <About></About>
            <BusinessModel></BusinessModel>
        </main>
    );
};

export default Home;