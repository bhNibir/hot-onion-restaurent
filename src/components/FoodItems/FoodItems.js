import React, { useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';


const FoodItems = (props) => {
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const items = props.items

    const [detailItem, setDetailItem] = useState({})

    const onClickdetailHandel = (value, key) => {
        value === "item" ? setDisplay({itemView:"none", detailView:"block"}) :
        setDisplay({itemView:"block", detailView:"none"});
        setDetailItem(items.find(item=> item.key ===key))                
    }

    const onClickHide = (value) => {
        value === "detail" ? setDisplay({itemView:"block", detailView:"none"}) :
        setDisplay({itemView:"none", detailView:"block"}) 
        ;
                      
    }
    
    
    return (
        <div>
            <Container>
                <Row>
                {
                    items.map(item => <Item item={item} display={display} onClickdetailHandel={onClickdetailHandel}></Item>)
                       
                }               
                <Details detailItem={detailItem} display={display} onClickHide={onClickHide}></Details>                                     
                </Row>
                <div className="text-center" style={{display: display.itemView}}>
                    <button className="btn-order btn px-5 m-5" disabled>Place Your Order</button>
                </div>
        
            </Container>
        </div>
    );
};

export default FoodItems;