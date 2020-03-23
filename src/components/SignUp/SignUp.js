import React, { useState } from 'react';
import './SignUp.css'
import logo from '../../images/logo2.png'
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
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
               console.log("Not Match");  
               userInfo.submitDisable = true
           }
           else{
               userInfo.submitDisable = false
             console.log("Not Match")
           }

           setUser(userInfo)
        }

    const handelCreateUser = () => {

        // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        // .then(res => {
        //     console.log(res)
        //     console.log("Scceucces")
            
        // })
        // .catch((error) =>{
        //     console.log(error);           

        // })

        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-8 text-center">
                <img  className="w-50 my-5" src={logo} alt=""/>
                    <form className="signup" onSubmit={handelCreateUser}>
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Name" type="text" name="name"  required />
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Email" type="email" name="email"  required />
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Password" type="password" name="password"  required />
                        <input className="w-100 p-3 mb-4" onChange={handelUserInfo} placeholder="Confirm Password" type="password" name="confirmPassword"  required />
                        <input className="w-100 p-3 mb-4 btn btn-order"  type="submit"  value="Sign Up" disabled= {user.submitDisable} />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;