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


function App() {
  return (
    <div className="App">
      
     <Router>
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
     </Router>

    </div>
  );
}

export default App;
