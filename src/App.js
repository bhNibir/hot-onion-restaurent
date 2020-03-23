import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Slider from './components/Slider/Slider';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};



function App() {
  return (
    <div className="App">
      
     <Router>
     <Provider template={AlertTemplate} {...options}>
     <Header></Header>
       <Switch>
          <Route exact path="/">
            <Slider></Slider>
            <Shop></Shop>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route> 
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>  
       </Switch>
       </Provider>
     </Router>

    </div>
  );
}

export default App;
