import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './FoodItems.css'


const FoodItems = (props) => {
    const items = props.items
    console.log(items);
    
    return (
        <div>
            <Container>
                <Row>
                {
                    items.map(item => <Col className="text-center" md={4}>
                        {
                            <Image className="item-img" src={item.image} rounded />        
                        }
                    </Col>)
                }                                        
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;