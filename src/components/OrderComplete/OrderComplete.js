import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrderCompleteImg from '../../images/ordercomplete.png'
import deliveryImg from '../../images/delivery.png'
import riderImg from '../../images/rider.png'
import './OrderComplete.css'


const OrderComplete = () => {
    return (
        <div>
           <Container>
                <Row className="my-5">
                    <Col md={8} className="d-flex align-items-center justify-content-center">
                        <img
                            width={500}
                            height={400}
                            className="m-0 p-0"
                            src= {OrderCompleteImg}
                            alt= "ordercomplete"
                        />
                    </Col>
                    
                    <Col md={{ span: 3 }} className="cart-container">
                        <div className="mt-4 ml-3">
                        <img
                            width={75}
                            height={75}
                            className="m-0 p-0"
                            src= {deliveryImg}
                            alt= "delivery"
                        />
                        </div>
                        <div className="address py-2 px-4 mt-2 mb-3">

                            <div>
                                <small><strong>Your location</strong> </small>
                                <p style={ {color: "gray"}}><small>107 Rd No 8</small></p>
                            </div>
                            <div>
                                <small><strong>Shop Address</strong> </small>
                                <p style={ {color: "gray"}}><small>Cunnur Cap, Bogura</small></p>
                            </div>

                        </div>
                            <h4><strong>09:00</strong></h4>
                            <p style={ {color: "gray"}}><small>Estimated Delivery Time</small></p>
                        <div className="address ">
                            <Row>
                                <Col md={3} className="m-2" >
                                    <img
                                        width={50}
                                        height={50}
                                        className="m-0 p-0"
                                        src= {riderImg}
                                        alt= "rider"
                                    />
                                </Col>
                                <Col>
                                    <div>
                                        <small><strong>Hamim</strong> </small>
                                        <p style={ {color: "gray"}}><small>Your Rider</small></p>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <div className="my-4">
                            <button className="btn btn-order btn w-100">Contact</button>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderComplete;