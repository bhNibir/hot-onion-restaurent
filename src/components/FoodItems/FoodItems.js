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
                            <div className="my-5 item">
                                <Image className="item-img" src={item.image} rounded />
                                <h6 className="mt-3">{item.name}</h6>
                                <p>{item.shortDescription}</p>
                                <h5>$ {item.price}</h5>
                            </div>        
                        }
                    </Col>)
                }                                        
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;