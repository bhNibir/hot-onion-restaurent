import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMinus, faPlus, faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Details.css'

const Details = (props) => {
    const { detailView} = props.display
    const onClickHide = props.onClickHide
    const {name, price, image, details } = props.detailItem

    return (
        <div style={{display: detailView, textAlign:"center"}}>
            <button className="close-btn round-button " onClick={() => onClickHide("detail")}>Close <FontAwesomeIcon icon={faTimes} /></button>
            <Row className="mb-5">
            <Col className="p-5" md={6}>
                <div className="detail-container">
                    <h1 className="mb-3">{name}</h1>
                    <p className="mb-5">{details}</p>
        
                    <div >
                        <h3 className="d-inline-block">${price}</h3>
                        <span className="cart-count">
                        <button><FontAwesomeIcon icon={faMinus} /> </button>
                        <input type="text" value= "1" disabled />
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                        </span>
                    </div>
                    <button className="round-button mt-3"> <FontAwesomeIcon icon={faShoppingCart} />  Add</button>
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