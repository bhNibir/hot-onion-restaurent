import React from 'react';

const Details = (props) => {
    const { detailView} = props.display
    
    return (
        <div style={{display: detailView}}>
            <h1>This is Details page</h1>
        </div>
    );
};

export default Details;