import React, { useState, useEffect } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import FoodItems from '../FoodItems/FoodItems';

const Shop = () => {
    const [foodItems, setFoodItems] = useState(fakeData) 
    const [items, setItems] = useState([])
    const [btnInfo, setBtnInfo] = useState()
    

    const onItemMenuClick = (value) => {
        setItems(foodItems.filter(item => item.category === value));        
    }
    useEffect(()=>{
        setFoodItems(fakeData)
    },[items])

    useEffect(()=>{
        onItemMenuClick("lunch")
    },[])

 


    return (
        <div>
            <div className="item-menu text-center mt-5">
                <button  className="item-btn " onClick={() => onItemMenuClick("breakfast")}>Breakfast</button>
                <button  className="item-btn active" onClick={() => onItemMenuClick("lunch")}>Lunch</button>
                <button  className="item-btn" onClick={() => onItemMenuClick("dinner")}>Dinner</button>
            </div>
            
            <FoodItems items={items}></FoodItems>
            
        </div>
    );
};

export default Shop;