import React, { useState } from 'react';
import './SignUp.css'
import logo from '../../images/logo2.png'

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
        setUser(userInfo)
           if(userInfo.password === '' || userInfo.password !== userInfo.confirmPassword){
               console.log("Not Match");  
               userInfo.submitDisable = true
           }
           else{
               userInfo.submitDisable = false
             console.log("Not Match")
           }
           
        }

    const userCreateHandel = (e) => {
        console.log(user.name , user.email , user.password);
        
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 text-center">
                <img  className="w-50 my-5" src={logo} alt=""/>
                    <form className="signup" onSubmit={userCreateHandel}>
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