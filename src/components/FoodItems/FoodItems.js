import React from 'react';
import './FoodItems.css'
import { Container, Row, Col } from 'react-bootstrap';


const FoodItems = () => {
    return (
        <div>
            <Container>
                <Row className="food-items">
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;