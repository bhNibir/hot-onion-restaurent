import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Container fluid className="search-container">
                <Row className="mb-4">      
                    <Col> <h1 className="d-flex justify-content-center align-items-center">Best food waiting for your belly</h1></Col>
                </Row>
                <Row >
                   <Col md={{ span: 4, offset: 4 }}>
                         <span className="justify-content-md-center">                        
                            <div className="input-group w-8 search-input">
                                <input type="text" className="form-control search" placeholder="Search food items" />
                                <div className="input-group-append">
                                    <button className="round-button search-btn" type="button">Search</button>
                                </div>
                            </div>
                        </span>
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Slider;