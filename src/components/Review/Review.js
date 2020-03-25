import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';

const Review = () => {
    const [items] = useState(fakeData)
    const [cartItems, setCartItems] = useState({
        items : [],
        totalQuantity: 0
    })
    
    useEffect(() => { 
        const newCart = {
            ...cartItems
        }      
        const saveCart = getDatabaseCart()
        const saveCartValues = Object.values(saveCart)
        const saveCartKeys = Object.keys(saveCart)
        const totalQuantity = saveCartValues.reduce((a, b) => a + b, 0)

        const newItem = () => saveCartKeys.map(key => {
            const item = items.find(item => item.key === key)
            item.quantity = saveCart[key]
            return item
        })
 
        newCart.items = newItem()
        newCart.totalQuantity = totalQuantity
        setCartItems(newCart)
        
        
    }, [])
    
    
    return (
        <div>           
            <Container>
                <Row className="justify-content-center">
                    <Col md={5} className="text-center">
                    <br/>
                    <h3>Edit Delivery Details</h3>
                    <hr/>
                    <br/>
                        <div className="signup">
                            <input className="w-100 p-3 mb-4 text-dark" type="text"  value="Delivery To Door" />
                            <input className="w-100 p-3 mb-4 text-dark" type="email"  value="107 Rd No 8" />
                            <input className="w-100 p-3 mb-4" placeholder="Flat Suite, Floor" type="text" />
                            <input className="w-100 p-3 mb-4" placeholder="Business Name" type="text" />
                            <input className="w-100 p-3 mb-4 btn btn-order" type="submit"  value="Save & Continue"  />
                        </div>
                    </Col>
                    <Col md={{ span: 3, offset: 3 }} className="justify-content-center mt-5">
                        <div>
                            <h6>Form <strong>Bogura Cunnur Cap</strong> </h6>
                            <p><small>Arriving in 30-40 min</small></p>
                            <p><small>107 Rd No 8</small></p>
                            
                        </div>
                        <div>
                            {
                                cartItems.items.map(item => <Cart item={item}></Cart>)
                            }
                        </div>
                        <div className="order">
                            <div class="d-flex">
                                <p>Subtotal . 4 Items</p>
                                <p class="ml-auto">$ 300</p>
                            </div>
                            <div class="d-flex">
                                <p>Tax</p>
                                <p class="ml-auto">$ 20</p>
                            </div>
                            <div class="d-flex">
                                <p>Delivery fee</p>
                                <p class="ml-auto">$ 2</p>
                            </div>
                            <div class="d-flex">
                                <p><strong>Total</strong></p>
                                <p class="ml-auto"><strong>$ 350</strong></p>
                            </div>
                            <Link to="/ordercomplete" style={{textDecoration: 'none', color: "white"}}><button className="btn btn-secondary btn-sm btn-block mb-4">Place Order</button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;