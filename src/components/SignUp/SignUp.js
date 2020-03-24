import React, { useState } from 'react';
import './SignUp.css'
import logo from '../../images/logo2.png'
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const alert = useAlert();
    const [user, setUser] = useState({
        name : '',
        email : '',
        password: '',
        confirmPassword: '',
        submitDisable: true
    })

        
    const handelUserInfo = (e) => {
        const userInfo = {
            ...user
        }
        
        //validation check

        userInfo[e.target.name] = e.target.value
         //check pass
        
           if(userInfo.password === '' || userInfo.password !== userInfo.confirmPassword){
               userInfo.submitDisable = true
           }
           else{
               userInfo.submitDisable = false
           }

           setUser(userInfo)
        }

    const handelCreateUser = () => {
        
        

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            res.user.updateProfile({
                displayName: user.name
            })
            alert.success(<div style={{ textTransform: "none" }}>Successfully SignUp </div> )
            
        })
        .catch(err => {
            const errorMessage = err.message
            alert.error(<div style={{ textTransform: "none" }}>{errorMessage}</div>)
            console.log(err);
            
        })
        
    }
    return (
        <div className="container-fluid signup-section">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-8 text-center">
                <img  className="w-50 my-5" src={logo} alt=""/>
                    {/* <form className="signup" onSubmit={handelCreateUser}> */}
                    {/* from diye data pathale problem kore keno pore dekhte hobe */}
                    <div className="signup">
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Name" type="text" name="name"  required />
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Email" type="email" name="email"  required />
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Password" type="password" name="password"  required />
                        <input className="w-100 p-3 mb-4" onChange={handelUserInfo} placeholder="Confirm Password" type="password" name="confirmPassword"  required />
                        <input className="w-100 p-3 mb-4 btn btn-order" onClick={handelCreateUser}  type="submit"  value="Sign Up" disabled= {user.submitDisable} />
                    </div>
                    <Link to="/login">Have an account?</Link>
                    <br/>
                    <br/>
                    {/* </form> */}
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;