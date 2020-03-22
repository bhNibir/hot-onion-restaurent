import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Item = (props) => {
    const { key, name, image, shortDescription, price } = props.item
    const onClickdetailHandel = props.onClickdetailHandel
    const { itemView } = props.display

    return ( 
            <Col style={{display: itemView}} onClick={() => onClickdetailHandel("item", key)} className="text-center" md={4}>
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