import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <div>           
            <Container>
                <Row className="justify-content-center">
                    <Col md={5} className="text-center">
                    <br/>
                    <h3>Edit Delivery Details</h3>
                    <hr/>
                    <br/>
                        <div className="signup">
                            <input className="w-100 p-3 mb-4 text-dark" type="text"  value="Delivery To Door" />
                            <input className="w-100 p-3 mb-4 text-dark" type="email"  value="107 Rd No 8" />
                            <input className="w-100 p-3 mb-4" placeholder="Flat Suite, Floor" type="text" />
                            <input className="w-100 p-3 mb-4" placeholder="Business Name" type="text" />
                            <input className="w-100 p-3 mb-4 btn btn-order" type="submit"  value="Save & Continue"  />
                        </div>
                    </Col>
                    <Col md={{ span: 3, offset: 3 }} className="justify-content-center mt-5">
                        <div>
                            <h6>Form <strong>Bogura Cunnur Cap</strong> </h6>
                            <p><small>Arriving in 30-40 min</small></p>
                            <p><small>107 Rd No 8</small></p>
                            
                        </div>
                        <div></div>
                        <div className="order">
                            <div class="d-flex">
                                <p>Subtotal . 4 Items</p>
                                <p class="ml-auto">$ 300</p>
                            </div>
                            <div class="d-flex">
                                <p>Tax</p>
                                <p class="ml-auto">$ 20</p>
                            </div>
                            <div class="d-flex">
                                <p>Delivery fee</p>
                                <p class="ml-auto">$ 2</p>
                            </div>
                            <div class="d-flex">
                                <p><strong>Total</strong></p>
                                <p class="ml-auto"><strong>$ 350</strong></p>
                            </div>
                            <Link to="/oredercomplete" className="btn btn-secondary btn-sm btn-block">Place Order</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;