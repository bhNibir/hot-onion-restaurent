import React from 'react';
import './Cart.css'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { name, image, quantity, price } = props.item
    return (
        <Row className="cart-container mb-2 py-1">
                <Col className="d-flex align-items-center">
                    <img
                        width={50}
                        height={50}
                        className="m-0 p-0"
                        src= {image}
                        alt={name}
                    />
                </Col>
                <Col md={5}>
                    <small style={ { fontWeight: 'bold'}}>{name}</small>
                    <br></br>
                    <small style={ {color: "#f91944", fontWeight: 'bold'}}>${price}</small>
                    <br></br>
                    <small style={ {color: "gray", font: '8pt italic bold'}}>Delivery Free</small>
                </Col>
                <Col  className="d-flex align-items-center">
                    <div className="input-group number-spinner">
                        <button className="mr-1 plus-btn"><FontAwesomeIcon icon={faMinus} /></button>
                        <input  type="text" className="form-control text-center" disabled defaultValue={quantity}/>
                        <button className="ml-1 plus-btn"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
            
                </Col>
            </Row>
    );
};

export default Cart;