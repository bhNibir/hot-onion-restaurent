import React from 'react';

const Details = (props) => {
    const { detailView} = props.display
    const onClickHide = props.onClickHide
    const {name } = props.detailItem
    return (
        <div style={{display: detailView}} onClick={() => onClickHide("detail")}>
            <h1>{name}</h1>
        </div>
    );
};

export default Details;