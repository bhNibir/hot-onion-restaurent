import React, { useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import logo from '../../images/logo2.png'

// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);





const Login = () => {
    const [user, setUser] = useState({email: '', password: '', name: 'babu'})
    const handelChange = (e)=>{
        const newUser = {
           ...user
        }

        newUser[e.target.name] = e.target.value
        setUser(newUser) 
    }

    const handelLogin= () =>{
        //const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            res.user.updateProfile({
                displayName: user.name
            })
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    return (
        <div className="container-fluid signup-section">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-8 text-center">
            <img  className="w-50 my-5" src={logo} alt=""/>
                <div className="signup" onSubmit={handelLogin}>
                    <input className="w-100 p-3 mb-4"  placeholder="Email" type="email" name="email"  required />
                    <input className="w-100 p-3 mb-4"  placeholder="Password" type="password" name="password"  required />
                    <input className="w-100 p-3 mb-4 btn btn-order"  type="submit"  value="Login"/>
                </div>
                <Link to="/signup">Create a new Account</Link>
            </div>
        </div>
        
    </div>
        
    );
};

export default Login;