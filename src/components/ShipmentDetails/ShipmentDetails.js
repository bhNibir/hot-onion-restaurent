import React from 'react';
import { useForm } from "react-hook-form";

const ShipmentDetails = ({onSubmitShipDetails}) => {
    const { register, handleSubmit} = useForm()

    return (
        <div>
            
        <br/>
        <h3>Edit Delivery Details</h3>
        <hr/>
        <br/>
            <div className="signup">
            <form onSubmit={handleSubmit(onSubmitShipDetails)}>
                <input name="name" className="w-100 mb-1 p-2 text-dark" defaultValue="Delivery To Door" placeholder="Full Name" ref={register({required: true})} />
                <br/>
                <input name="email" className="w-100 mb-1 p-2 text-dark" defaultValue="107 Rd No 8" placeholder="Email" ref={register({required: true})} />
                <br/>
                <input name="address" className="w-100 mb-1 p-2"  placeholder="Address" ref={register({required: true})} />
                <br/>
                <input name="address2" className="w-100 mb-1 p-2"  placeholder="Address 2" ref={register} />
                <br/>
                <textarea name="instructor" className="w-100 mb-1 p-2"  placeholder="Add delivery instructor" ref={register} />
                <br/>
                <input className="w-100 p-3 mb-4 btn btn-order" type="submit" value="Save & Continue" />
                
            </form>
            </div>
        </div>
    );
};

export default ShipmentDetails;