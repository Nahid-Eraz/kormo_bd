import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        })
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className={(isSticky || isCollapsed) ? "shadow-sm-bg-white py-2" : "py-4"}>

                <Navbar.Brand as={Link} to="/" className="me-md-5">KORMO BD</Navbar.Brand>

                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>

                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="ms-md-5" onClick={() => window.scrollTo(500, 0)}>Home</Nav.Link>
                        <Nav.Link href="#services" className="ms-md-5" active>Services</Nav.Link>
                        <Nav.Link href="#reviews" className="ms-md-5" active>Reviews</Nav.Link>
                        <Nav.Link href="#contact" className="ms-md-5" active>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard/profile" className="ms-md-5" active>Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="ms-md-5 px-4 btn-main" active>Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
    );
};

export default NavBar;