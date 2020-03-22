import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Item = (props) => {
    const {name, image, shortDescription, price} = props.item
    const onClickHide = props.onClickHide
    const { itemView} = props.display

    return ( 
        
            <Col style={{display: itemView}} onClick={() => onClickHide("item")} className="text-center" md={4}>
                {
                    <div className="my-5 item">
                        <Image className="item-img" src={image} rounded />
                        <h6 className="mt-3">{name}</h6>
                        <p>{shortDescription}</p>
                        <h5>$ {price}</h5>
                    </div>        
                }
            </Col>            
    );
};

export default Item;