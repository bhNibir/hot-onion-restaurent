import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
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

export default Slider;