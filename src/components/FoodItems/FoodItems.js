import React, { useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';


const FoodItems = (props) => {
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const items = props.items

    const onClickHide = () => {
        console.log(1);
        
    }
    return (
        <div>
            <Container>
                <Row>
                {
                    items.map(item => <Item item={item} display={display} onClickHide={onClickHide}></Item>)
                } 
                <Details display={display}></Details>                                     
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;