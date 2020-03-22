import React, { useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';


const FoodItems = (props) => {
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const items = props.items

    const onClickHide = (value) => {
        value === "item" ? setDisplay({itemView:"none", detailView:"block"}) :
        setDisplay({itemView:"block", detailView:"none"})

        
        
        
    }
    return (
        <div>
            <Container>
                <Row>
                {
                    items.map(item => <Item item={item} display={display} onClickHide={onClickHide}></Item>)
                } 
                <Details display={display} onClickHide={onClickHide}></Details>                                     
                </Row>
            </Container>
        </div>
    );
};

export default FoodItems;