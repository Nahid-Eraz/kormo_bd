import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './Header.css';


const Header = () => {
    return (
        <main className="header-container">
            <NavBar></NavBar>
            <Banner></Banner>
        </main>
    );
};

export default Header;