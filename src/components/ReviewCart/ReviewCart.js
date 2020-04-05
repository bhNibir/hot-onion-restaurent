import React from 'react';
import Cart from '../Cart/Cart';

const ReviewCart = ({items, cartItems, cartCal, handlePayment, shipInfoAdded}) => {
    return (
    <div>
        <h6>Form <strong>Bogura Cunnur Cap</strong> </h6>
        <p><small>Arriving in 30-40 min</small></p>
        <p><small>107 Rd No 8</small></p>
     
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
            
            <button className="btn btn-secondary btn-sm btn-block mb-4" onClick={handlePayment} disabled={shipInfoAdded ? false : true}>
                Proceed to Pay
            </button>

        </div>
    </div>
    );
};

export default ReviewCart;