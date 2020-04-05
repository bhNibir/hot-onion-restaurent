import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Container, Row, Col } from 'react-bootstrap';
import OrderComplete from '../OrderComplete/OrderComplete';

const CheckoutForm = ({orderPocess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [showOrderCompleted, setshowOrderCompleted] = useState(true)

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
      console.log(error);
      
    }
    else{       
        orderPocess(paymentMethod)
        setshowOrderCompleted(false)
      } 
      
  };


  return (
    <>
      {
         showOrderCompleted ?
         <Container  className="signup" style={{display: showOrderCompleted.checkoutForm}}>
           <Row>
             <Col md={{ span: 6, offset: 3 }}>
               <h1>Payment With Your Card</h1>
               <br/>
               <form onSubmit={handleSubmit}>
                 <CardElement />
                 <br/>
                   <button className="w-100 btn btn-order" type="submit" disabled={!stripe} >
                       Pay
                   </button>
               </form>
             </Col>
           </Row>
         </Container>
         :
         <OrderComplete ></OrderComplete>
      }
    </>
    );
};

export default CheckoutForm;