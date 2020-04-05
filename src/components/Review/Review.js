import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useAlert } from 'react-alert';
import { AuthContext, CartContext } from '../../App'
import Payment from '../Payment/Payment';
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [shipInfoAdded , setShipInfoAdded] = useState(null)
    const alert = useAlert()
    const user = useContext(AuthContext)
    const cart = useContext(CartContext)

    const [controlEnable, setControlEnable] = useState({
        review : "",
        payment : "none",
        detailsForm : false,
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
        fetch('https://mighty-headland-40172.herokuapp.com/itemsReviewByKey', {
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
 
    
    const OrderComplete = (paymentDetails) => {
        console.log(paymentDetails.id, paymentDetails.card.last4)
        const orderDetails = {
            user: user.name,
            cart: getDatabaseCart(),
            shipment:shipInfoAdded,
            paymentDetails: {
                id:paymentDetails.id, 
                last4: paymentDetails.card.last4
            }
        }

        fetch('https://mighty-headland-40172.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify(orderDetails),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))
        alert.success(<div style={{ textTransform: "none" }}>Thank You {user.name}  </div> )
        processOrder(cartItems)
    }
    
    const handlePayment = () => {
        setControlEnable({review : 'none', payment : 'block' })
    }

    const onSubmitShipDetails = data => {
        controlEnable.detailsForm = true
        setShipInfoAdded(data)
    }
    return (
        <div>           
            <Container>
                <Row className="justify-content-center" style={{display: controlEnable.review}}>
                {
                    cart.totalQuantity ?  
                        <React.Fragment> 
                            <Col md={5} className="text-center">
                                <ShipmentDetails 
                                    onSubmitShipDetails={onSubmitShipDetails}
                                    controlEnable={controlEnable}
                                    >
                                </ShipmentDetails>
                            </Col>
                            <Col md={{ span: 3, offset: 3 }} className="justify-content-center mt-5">
                               <ReviewCart 
                                    items = {items} cartItems={cartItems}
                                    cartCal={cartCal} handlePayment={handlePayment} 
                                    shipInfoAdded={shipInfoAdded}>
                                </ReviewCart>
                            </Col>
                        </React.Fragment>
                    :
                        <Col className=" text-center">                       
                            <h3>Your Cart is Empty</h3>
                            <Link to="/">Continue To Shop</Link>
                        </Col>
                    }
                </Row>
                <Row style={{display: controlEnable.payment}}>
                    <Payment OrderComplete={OrderComplete}></Payment>
                </Row>
            </Container>
        </div>
    );
};

export default Review;