import React, { useState, useEffect } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import FoodItems from '../FoodItems/FoodItems';

const Shop = () => {
    const [foodItems, setFoodItems] = useState(fakeData)
    
   
    const [items, setItems] = useState([])
    const [color, setColor] = useState("")

    const onItemMenuClick = (value) => {

        setItems(foodItems.filter(item => item.category === value));
        setColor("active-btn-"+value)
    }
    useEffect(()=>{
        setFoodItems(fakeData)
    },[items])

    useEffect(()=>{
        onItemMenuClick("lunch")
    },[])

    console.log(color);
    

    

    return (
        <div>
            <div className="item-menu text-center mt-5">
                <button className={color} onClick={() => onItemMenuClick("breakfast")}>Breakfast</button>
                <button className={color} onClick={() => onItemMenuClick("lunch")}>Lunch</button>
                <button className={color} onClick={() => onItemMenuClick("dinner")}>Dinner</button>
            </div>
            
            <FoodItems items={items}></FoodItems>
            
        </div>
    );
};

export default Shop;