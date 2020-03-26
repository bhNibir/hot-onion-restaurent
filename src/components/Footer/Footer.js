import React from 'react';
import { Container, Row, Col, CardColumns, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faBus, faBell, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <Container>
                <Row className="mb-5">
                <Col md={6}>
                    <h3>Why you choose us</h3>
                    <p>Barton waited twenty always repair in within we do. An delighted offering crusty mu is dagwood's at. Boy prosperous increasing surround</p>
                
                </Col>
                </Row>
                <Row>
                <CardColumns>
                    <Card className="cart-border">
                        <Card.Img variant="top" src="https://i.ibb.co/1MjJtHP/adult-blur-blurred-background-687824.png" />
                        <Card.Body>
                        <Card.Title><span className = "bg-danger text-white rounded-circle py-1 px-2"><FontAwesomeIcon className = "text-white" icon={faBus}></FontAwesomeIcon></span> Fast Delivery</Card.Title>
                        <Card.Text>
                            Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                        </Card.Text>
                        <Link className="font-weight-bold">See More <FontAwesomeIcon className = "text-success" icon={faArrowAltCircleRight}></FontAwesomeIcon></Link>
                        </Card.Body>
                    </Card>
                    <Card className="cart-border">
                        <Card.Img variant="top" src="https://i.ibb.co/3sFqDc1/chef-cook-food-33614.png" />
                        <Card.Body>
                        <Card.Title><span className = "bg-danger text-white rounded-circle py-1 px-2"><FontAwesomeIcon className = "text-white" icon={faBell}></FontAwesomeIcon></span> A Good Auto Responder</Card.Title>
                        <Card.Text>
                            Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                        </Card.Text>

                        <Link className="font-weight-bold">See More <FontAwesomeIcon className = "text-success" icon={faArrowAltCircleRight}></FontAwesomeIcon></Link>

                        </Card.Body>
                    </Card>
                    <Card className="cart-border">
                        <Card.Img variant="top" src="https://i.ibb.co/pj7ps21/architecture-building-city-2047397.png" />
                        <Card.Body>
                        <Card.Title><span className = "bg-danger text-white rounded-circle py-1 px-2"><FontAwesomeIcon className = "text-white" icon={faShippingFast}></FontAwesomeIcon></span> Home Delivery</Card.Title>
                        <Card.Text>
                            Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                        </Card.Text>
                        <Link className="font-weight-bold">See More <FontAwesomeIcon className = "text-success" icon={faArrowAltCircleRight}></FontAwesomeIcon></Link>

                        </Card.Body>
                    </Card>
                    
                    </CardColumns>
                </Row>
            </Container >
            <Container fluid className="bg-dark">
                <Row className="mt-5 pt-5">
                        <Col md={7}>
                            <img  className="w-25 m-3" src={logo} alt=""/>
                        </Col>
                        <Col>
                            <Nav className="flex-column text-light ">
                            <Nav.Link className="text-light " >About Online food</Nav.Link>
                            <Nav.Link className="text-light ">Read Our Blog</Nav.Link>
                            <Nav.Link className="text-light ">Sign up to deliver</Nav.Link>
                            <Nav.Link className="text-light ">Add your restaurant</Nav.Link>
                            </Nav>
                        </Col>
                        <Col>
                            <Nav className="flex-column text-light ">
                            <Nav.Link className="text-light " >Get help</Nav.Link>
                            <Nav.Link className="text-light ">FAQs</Nav.Link>
                            <Nav.Link className="text-light ">View all cities</Nav.Link>
                            <Nav.Link className="text-light ">Restaurant near me</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className="mt-5 py-2 px-3">
                        <Col><p className="text-light"><small>Copyright © online food</small></p></Col>
                        <Col className="d-flex justify-content-between text-light">
                            <p>Privacy Policy</p>
                            <p>Terms of use</p>
                            <p>Pricing</p>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Footer;