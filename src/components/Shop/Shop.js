import React, { useState, useEffect } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import FoodItems from '../FoodItems/FoodItems';

const Shop = () => {
    const [foodItems, setFoodItems] = useState(fakeData)
    // const [breakfastItems, setBreakfastItems] = useState([])
    // const [lunchItems, setLunchItems] = useState([])
    // const [dinnerItems, setDinnerItems] = useState([])
    // let items = foodItems;
    const [items, setItems] = useState([])
    const [color, setColor] = useState("")

    const onItemMenuClick = (value) => {

        setItems(foodItems.filter(item => item.category === value));
        setColor("active-btn-"+value)
    }

    useEffect(()=>{
        onItemMenuClick("lunch")
    },[])

    console.log(color);
    

    

    return (
        <div>
            <div className="item-menu text-center">
                <button className={color} onClick={() => onItemMenuClick("breakfast")}>Breakfast</button>
                <button className={color} onClick={() => onItemMenuClick("lunch")}>Lunch</button>
                <button className={color} onClick={() => onItemMenuClick("dinner")}>Dinner</button>
            </div>

            <FoodItems items={items}></FoodItems>
            
        </div>
    );
};

export default Shop;