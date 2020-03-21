import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodItems from './components/FoodItems/FoodItems';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <FoodItems></FoodItems>
    </div>
  );
}

export default App;
