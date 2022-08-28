import React from "react";
import logo from '../../images/logo.png';
import { Icon } from '@iconify/react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="mx-auto">
                <Navbar.Brand as={Link} to='/'><img src={logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Nav.Link href="#home"><Icon icon="bi:cart" /></Nav.Link>
                        <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                        <Nav.Link className="" as={Link} to='/register'><Button variant="danger">Sign Up</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>



        </Navbar>

    );
};

export default Header;



