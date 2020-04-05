import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../App';

const ShipmentDetails = ({onSubmitShipDetails, controlEnable}) => {
    const { register, handleSubmit} = useForm()
    const user = useContext(AuthContext)
    
    return (
        <div>            
            <br/>
            <h3>Edit Delivery Details</h3>
            <hr/>
            <br/>
                <div className="signup">
                <form onSubmit={handleSubmit(onSubmitShipDetails)}>
                    <input name="name" className="w-100 mb-1 p-2 text-dark" defaultValue={user.name} placeholder="Full Name" ref={register({required: true})} disabled={controlEnable.detailsForm} />
                    <br/>
                    <input name="email" className="w-100 mb-1 p-2 text-dark" defaultValue={user.email} placeholder="Full Name" ref={register({required: true})} disabled={controlEnable.detailsForm} />
                    <br/>
                    <input name="address" className="w-100 mb-1 p-2"  placeholder="Address" ref={register({required: true})} disabled={controlEnable.detailsForm} />
                    <br/>
                    <input name="address2" className="w-100 mb-1 p-2"  placeholder="Address 2" ref={register} disabled={controlEnable.detailsForm} />
                    <br/>
                    <textarea name="instruction" className="w-100 mb-1 p-2"  placeholder="Add delivery instruction" ref={register} disabled={controlEnable.detailsForm} />
                    <br/>
                    <input className="w-100 p-3 mb-4 btn btn-order" type="submit" value="Save & Continue" disabled={controlEnable.detailsForm} />
                    
                </form>
                </div>
        </div>
    );
};

export default ShipmentDetails;