import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const FoodItems = (props) => {
    const items = props.items
    return (
        <div>
            <Container>
                <Row>
                {
                    items.map(item => <Col md={4}>
                        {
                            <Image src={item.image} rounded />        
                        }
                    </Col>)
                }                                        
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;