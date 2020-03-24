import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';



const FoodItems = (props) => {
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const {items, handelCart} = props
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
                    items.map(item => <Item item={item} key={item.key} display={display} onClickdetailHandel={onClickdetailHandel}></Item>)
                    
                }               
                <Details detailItem={detailItem} display={display} onClickHide={onClickHide} handelCart={handelCart}></Details>                                     
                </Row>
                <div className="text-center" style={{display: display.itemView}}>
                    <button className="btn-order btn px-5 m-5" disabled>Place Your Order</button>
                </div>
        
            </Container>
        </div>
    );
};

export default FoodItems;