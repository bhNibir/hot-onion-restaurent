import React, { useState, useEffect, createContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import './FoodItems.css'
import Item from '../Item/Item'
import Details from '../Details/Details';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import { useAlert} from 'react-alert';

export const TotalQuantityContext = createContext()

const FoodItems = (props) => {
    const alert = useAlert()
    const [display,setDisplay] = useState({itemView:"block", detailView:"none"})
    const items = props.items
    const [detailItem, setDetailItem] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    
    

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
        alert.success(<div style={{ textTransform: "none" }}>Successfully add to cart </div>)
    }
    useEffect(() => {
        cartItems.map(cartItem => addToDatabaseCart(cartItem.key, cartItem.quantity))
        const saveCart = getDatabaseCart()
        const itemQuantity = Object.values(saveCart)
        const totalQuantity = itemQuantity.reduce((a, b) => a + b, 0)
        setTotalItems(totalQuantity);
        
        
    }, [cartItems])

    
    
    
    
    
    return (
        <div>
            <TotalQuantityContext.Provider value={totalItems}>

            <Container>
                <Row>
                {
                    items.map(item => <Item item={item} key={item.key} display={display} onClickdetailHandel={onClickdetailHandel}></Item>)
                    
                }               
                <Details detailItem={detailItem} display={display} onClickHide={onClickHide} handelCart={handelCart}></Details>                                     
                </Row>
                <div className="text-center" style={{display: display.itemView}}>
                    <button className="btn-order btn px-5 m-5" disabled={totalItems ? false: true}>Place Your Order</button>
                </div>
        
            </Container>

            </TotalQuantityContext.Provider>
        </div>
    );
};

export default FoodItems;