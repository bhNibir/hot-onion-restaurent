import React from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import logo from '../../images/logo2.png'

// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

firebase.initializeApp(firebaseConfig);



const Login = (props) => {
    const {updateUserInfo, user} = props
    const alert = useAlert()
    

    const handelChange = (e)=>{
        const newUser = {
           ...user
        }

        newUser[e.target.name] = e.target.value
        updateUserInfo(newUser) 
    }

    const handelLogin= () =>{
        console.log(user.email, user.password);
        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            const loginUser = {
                ...user
             }

             loginUser.name = res.user.displayName
             loginUser.isSignIn = true

             updateUserInfo(loginUser)
            
            
        })
        .catch(err => {
            console.log(err);
            alert.error(<div style={{textTransform: "none"}}>{err.message}</div>)
            
        })
    }

    
    return (
        <div className="container-fluid signup-section">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-8 text-center">
            <img  className="w-50 my-5" src={logo} alt=""/>
                <div className="signup">
                    <input className="w-100 p-3 mb-4" onBlur={handelChange} placeholder="Email" type="email" name="email"  required />
                    <input className="w-100 p-3 mb-4" onBlur={handelChange} placeholder="Password" type="password" name="password"  required />
                    <input className="w-100 p-3 mb-4 btn btn-order" onClick={handelLogin} type="submit"  value="Login"/>
                </div>
                <Link to="/signup">Create a new Account</Link>
            </div>
        </div>
        
    </div>
        
    );
};

export default Login;