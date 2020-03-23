import React, { useState } from 'react';
import './SignUp.css'
import logo from '../../images/logo2.png'

const SignUp = () => {
    const [user, setUser] = useState({
        name : '',
        email : '',
        password: '',
        isSubmit: true,
    })

   

        
    const handelUserInfo = (e) => {
        const userInfo = {
            ...user
        }
        
        //validation check
        let validPass= false
        let validName= false
        let validEmail= false

        let pass = null
        let pass2 = null

         //check pass
        validPass = true
        // check email
        validEmail = true
        // check name
        validEmail = true

        if(validPass && validName && validEmail){
            user.isSubmit = false
        }
        console.log(user)
        userInfo[e.target.name] = e.target.value
        setUser(userInfo) 
        
             
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
                        <input className="w-100 p-3 mb-4" placeholder="Password" type="password" name="password"  required />
                        <input className="w-100 p-3 mb-4" onBlur={handelUserInfo} placeholder="Confirm Password" type="password" name="password2"  required />
                        <input className="w-100 p-3 mb-4 btn btn-order"  type="submit"  value="Sign Up" disabled= {user.isSubmit} />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;