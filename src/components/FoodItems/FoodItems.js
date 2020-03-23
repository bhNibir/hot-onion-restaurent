import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';
import {addToDatabaseCart} from '../../utilities/databaseManager'


const FoodItems = (props) => {
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const items = props.items
    const [detailItem, setDetailItem] = useState({})
    const [cartItems, setCartItems] = useState([])
    

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

    const handelCart= (item) =>{        
        const toBeAddedKey = item.key
        const sameItem = cartItems.find(cartItem => cartItem.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if(sameItem){
            count = sameItem.quantity + item.quantity;
            sameItem.quantity = count
            const others = cartItems.filter(cartItem => cartItem.key !== toBeAddedKey  )
            newCart = [...others, sameItem]
        }  
        else {
            newCart = [...cartItems, item];
        }
        setCartItems(newCart)
    }
    useEffect(() => {
        cartItems.map(cartItem => addToDatabaseCart(cartItem.key, cartItem.quantity))
        console.log(cartItems)
    }, [handelCart])
    
    
    
    
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
                    <button className="btn-order btn px-5 m-5" disabled={cartItems.length ? false: true}>Place Your Order</button>
                </div>
        
            </Container>
        </div>
    );
};

export default FoodItems;