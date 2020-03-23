import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Details.css'
import { useAlert } from 'react-alert';


const Details = (props) => {
    const alert = useAlert()
    const { detailView} = props.display
    const onClickHide = props.onClickHide
    const {name, price, image, details } = props.detailItem
    const [itemCount, setItemCount] = useState(1)
    const handelCart = props.handelCart

    const handelItemCount = (value) =>{

         value < 0 && itemCount < 1 ? alert.error(<div style={{ textTransform: "capitalize" }}>Your cart is Empty </div> ) : setItemCount(itemCount+value); 
         
    }


    return (
        <div style={{display: detailView, textAlign:"center"}}>
            <button className="close-btn round-button " onClick={() => onClickHide("detail")}>Close <FontAwesomeIcon icon={faTimes} /></button>
            <Row className="mb-5 text-left">
            <Col className="p-5" md={6}>
                <div className="detail-container">
                    <h1 className="mb-3">{name}</h1>
                    <p className="mb-5">{details}</p>
        
                    <div >
                        <h3 className="d-inline-block">${price}</h3>
                        <span className="cart-count">
                            <button onClick={()=> handelItemCount(-1)}><FontAwesomeIcon icon={faMinus} /> </button>
                            <input type="text" value= {itemCount} disabled />
                            <button onClick={()=> handelItemCount(1)}><FontAwesomeIcon icon={faPlus} /></button>
                        </span>
                    </div>
                    <button className="round-button mt-3"
                        onClick={()=> handelCart({key:props.detailItem.key, quantity: itemCount})}
                    > <FontAwesomeIcon icon={faShoppingCart} />  Add</button>
                </div>  
            </Col>  
            <Col className="text-center" md={6}>
                <Image className="w-75" src={image}  /> 
            </Col>
            </Row>
        </div>
    );
};

export default Details;