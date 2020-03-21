import React from 'react';
import './Header.css'
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import logo from '../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div> 

            <Navbar bg="white" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="Red Onion logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup"><span className="round-button">Sign up</span></Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
            </Navbar>   
            <Container fluid>
                <Row>
                <div className="search-container">
                    <h1>Best food waiting for your belly</h1>
                    <span>
                        <input className="" type="text" placeholder="Search food items"/>
                        <button className="round-button">Search</button>
                    </span>
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default Header;