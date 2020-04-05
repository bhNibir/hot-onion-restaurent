import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = ({OrderComplete}) => {
   
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm OrderComplete={OrderComplete}/>
      </Elements>
      
    </div>
  );
};

export default Payment;