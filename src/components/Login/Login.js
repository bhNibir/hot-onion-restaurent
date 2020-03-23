import React, { useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

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
        <div>
           <form onSubmit={()=>handelLogin()}>
                <input onBlur={handelChange} type="text" name="email"/>
                <input onChange={handelChange} type="password" name="password"/>
                <input type="submit" value="login"/>
            </form>           
        </div>
    );
};

export default Login;