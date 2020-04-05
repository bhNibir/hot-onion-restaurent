import React from 'react';
import { Link } from 'react-router-dom';

const Payment = ({OrderComplete}) => {
    return (
        <div>
            <h1>Payment</h1>
            <Link to="/ordercomplete" style={{textDecoration: 'none', color: "white"}}><button className="btn btn-secondary btn-sm btn-block mb-4" onClick={OrderComplete}>Place Order</button></Link>
       
        </div>
    );
};

export default Payment;