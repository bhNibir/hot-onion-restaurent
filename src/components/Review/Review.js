import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { useAlert, positions } from 'react-alert';
import { AuthContext, CartContext } from '../../App'

const Review = () => {
    const alert = useAlert()
    const user = useContext(AuthContext)
    const cart = useContext(CartContext)

    const [items] = useState(fakeData)
    const [cartItems, setCartItems] = useState({
        items : [],
        totalQuantity: 0
    })
    const[cartCal, setCartCal] = useState({
        subTotal : 0,
        tax : 20,
        deliveryFee : 2,
    })
    
    useEffect(() => { 
        const newCart = {
            ...cartItems
        }    
        const NewCartCal = {
            ...cartCal
        }  
        const saveCart = getDatabaseCart()
        const saveCartValues = Object.values(saveCart)
        const saveCartKeys = Object.keys(saveCart)
        const totalQuantity = saveCartValues.reduce((a, b) => a + b, 0)

        const newItem = () => saveCartKeys.map(key => {
            const item = items.find(item => item.key === key)
            item.quantity = saveCart[key]
            item.totalPrice = item.price * item.quantity
            NewCartCal.subTotal += item.totalPrice
            return item
        })
 
        newCart.items = newItem()
        newCart.totalQuantity = totalQuantity
        setCartItems(newCart)
        setCartCal(NewCartCal)
        
        
    }, [])
    
    const OrderCompleteMessage = () => {
        alert.success(<div style={{ textTransform: "none" }}>Thank You {user.name}  </div> )
        processOrder(cartItems)
    }
    
    return (
        <div>           
            <Container>
                <Row className="justify-content-center">
                {
                    cart.totalQuantity ?  
                        <React.Fragment> 
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
                                        <p>Subtotal . {cartItems.totalQuantity} Items</p>
                                        <p class="ml-auto">$ {cartCal.subTotal}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p>Tax</p>
                                        <p class="ml-auto">$ {cartCal.tax}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p>Delivery fee</p>
                                    <p class="ml-auto">$ {cartCal.deliveryFee}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p><strong>Total</strong></p>
                                        <p class="ml-auto"><strong>$ {cartCal.subTotal + cartCal.tax + cartCal.deliveryFee}</strong></p>
                                    </div>
                                    <Link to="/ordercomplete" style={{textDecoration: 'none', color: "white"}}><button className="btn btn-secondary btn-sm btn-block mb-4" onClick={OrderCompleteMessage}>Place Order</button></Link>
                                </div>
                            </Col>
                        </React.Fragment>
                    :
                        <Col className=" text-center">                       
                            <h3>Your Cart is Empty</h3>
                            <Link to="/">Continue To Shop</Link>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Review;