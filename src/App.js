import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Slider from './components/Slider/Slider';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import * as firebase from "firebase/app";
import "firebase/auth";


const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};

export const AuthContext = createContext()


function App() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    isSignIn: false
   })

  const updateUserInfo = (userInfo) => setUser(userInfo)

  useEffect(()=>{

    firebase.auth().onAuthStateChanged(usr => {
        if (usr) {
          const { displayName, email } = usr
          const crrUser = {
            ...user
          }
          crrUser.email = email
          crrUser.name = displayName
          crrUser.isSignIn = true

          setUser(crrUser)
      } else {
        // No user is signed in.
      }
    })
  },[])

  const logOut = () => {
    firebase.auth().signOut()
    .then(res => {
      // Sign-out successful.
      console.log(res);
      
    })
    .catch(error => {
      // An error happened.
      console.log(error);
    })
  }

  
  return (
    
    <div className="App">
      
     <Router>
      <AuthContext.Provider value = {user}>
      <Provider template={AlertTemplate} {...options}>
      <Header logOut={logOut}></Header>
        <Switch>
            <Route exact path="/">
              <Slider></Slider>
              <Shop></Shop>
            </Route>
            <Route path="/login">
              {
                user.isSignIn ? <Redirect to = "/" /> : <Login updateUserInfo = {updateUserInfo}  user = {user}> </Login>
              }
            </Route> 
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
        </Switch>
        </Provider>
        </AuthContext.Provider>
     </Router>

    </div>
  );
}

export default App;
