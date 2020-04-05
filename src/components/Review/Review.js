import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { useAlert, positions } from 'react-alert';
import { AuthContext, CartContext } from '../../App'
import Payment from '../Payment/Payment';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit} = useForm()
    const [shipInfoAdded , setShipInfoAdded] = useState(null)
    const alert = useAlert()
    const user = useContext(AuthContext)
    const cart = useContext(CartContext)
    const [paymentOption, setPaymentOption] = useState({
        review : "",
        payment : "none"
    })

    const [items, setItems] = useState([])
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
        const saveCart = Object.keys(getDatabaseCart())
        fetch('http://localhost:4200/itemsReviewByKey', {
                method: 'POST',
                body: JSON.stringify(saveCart),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response => response.json())
              .then(cartFood => setItems(cartFood))
             
    },[])

    useEffect(()=>{
        if(items.length){
            manageCart(items)
        }
    },[items])

    const manageCart= () => {
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
    }
 
    
    const OrderCompleteMessage = () => {
        alert.success(<div style={{ textTransform: "none" }}>Thank You {user.name}  </div> )
        processOrder(cartItems)
    }
    
    const handlePayment = () => {
        setPaymentOption({review : 'none', payment : 'block' })
    }

    const onSubmit = data => {
        setShipInfoAdded(data)
    }; 
    return (
        <div>           
            <Container>
                <Row className="justify-content-center" style={{display: paymentOption.review}}>
                {
                    cart.totalQuantity ?  
                        <React.Fragment> 
                            <Col md={5} className="text-center">
                            <br/>
                            <h3>Edit Delivery Details</h3>
                            <hr/>
                            <br/>
                                <div className="signup">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input name="name" className="w-100 mb-1 p-2 text-dark" defaultValue="Delivery To Door" placeholder="Full Name" ref={register({required: true})} />
                                    <br/>
                                    <input name="email" className="w-100 mb-1 p-2 text-dark" defaultValue="107 Rd No 8" placeholder="Email" ref={register({required: true})} />
                                    <br/>
                                    <input name="address" className="w-100 mb-1 p-2"  placeholder="Address" ref={register({required: true})} />
                                    <br/>
                                    <input name="address2" className="w-100 mb-1 p-2"  placeholder="Address 2" ref={register} />
                                    <br/>
                                    <textarea name="instructor" className="w-100 mb-1 p-2"  placeholder="Add delivery instructor" ref={register} />
                                    <br/>
                                    <input className="w-100 p-3 mb-4 btn btn-order" type="submit" value="Save & Continue" />
                                    
                                </form>
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
                                        items.map(item => <Cart item={item} key={item.key}></Cart>)
                                    }
                                </div>
                                <div className="order">
                                    <div className="d-flex">
                                        <p>Subtotal . {cartItems.totalQuantity} Items</p>
                                        <p className="ml-auto">$ {cartCal.subTotal}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p>Tax</p>
                                        <p className="ml-auto">$ {cartCal.tax}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p>Delivery fee</p>
                                    <p className="ml-auto">$ {cartCal.deliveryFee}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p><strong>Total</strong></p>
                                        <p className="ml-auto"><strong>$ {cartCal.subTotal + cartCal.tax + cartCal.deliveryFee}</strong></p>
                                    </div>
                                    {/* <Link to="/ordercomplete" style={{textDecoration: 'none', color: "white"}}><button className="btn btn-secondary btn-sm btn-block mb-4" onClick={OrderCompleteMessage}>Place Order</button></Link> */}
                                   
                                    <button className="btn btn-secondary btn-sm btn-block mb-4" onClick={handlePayment}>
                                        Proceed to Pay
                                    </button>
            
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
                <Row style={{display: paymentOption.payment}}>
                    <Payment></Payment>
                </Row>
            </Container>
        </div>
    );
};

export default Review;