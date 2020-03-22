import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import FoodItems from '../FoodItems/FoodItems';

const Shop = () => {
    const [items, setItems] = useState(fakeData)
    
    return (
        <div>
            <div className="item-menu text-center">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>

            <FoodItems items={items}></FoodItems>
            
        </div>
    );
};

export default Shop;