import React from 'react';

const Details = (props) => {
    const { detailView} = props.display
    const onClickHide = props.onClickHide
    return (
        <div style={{display: detailView}} onClick={() => onClickHide("detail")}>
            <h1>This is Details page</h1>
        </div>
    );
};

export default Details;