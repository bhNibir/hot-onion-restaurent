import React, { useState, useEffect} from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import FoodItems from '../FoodItems/FoodItems';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useAlert} from 'react-alert';

const Shop = (props) => {
    const {totalCartItems, setTotalCartItems} = props
    const [foodItems, setFoodItems] = useState(fakeData) 
    const [items, setItems] = useState([])   
    const [cartItems, setCartItems] = useState([])
    const alert = useAlert()

    const onItemMenuClick = (value) => {
        setItems(foodItems.filter(item => item.category === value));        
    }
    useEffect(()=>{
        setFoodItems(fakeData)
    },[items])

    useEffect(() => {
        onItemMenuClick("lunch")
    },[])

    const handelCart= (item) =>{        
        const toBeAddedKey = item.key
        const sameItem = cartItems.find(cartItem => cartItem.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if(sameItem){
            count = sameItem.quantity + item.quantity;
            sameItem.quantity = count
            const others = cartItems.filter(cartItem => cartItem.key !== toBeAddedKey  )
            newCart = [...others, sameItem]
        }  
        else {
            newCart = [...cartItems, item];
        }
        setCartItems(newCart)
        alert.success(<div style={{ textTransform: "none" }}>Successfully add to cart </div>)
    }
    useEffect(() => {
        cartItems.map(cartItem => addToDatabaseCart(cartItem.key, cartItem.quantity))
        const saveCart = getDatabaseCart()
        const items = Object.keys(saveCart)
        const itemObject = Object.values(saveCart)
        const totalQuantity = itemObject.reduce((a, b) => a + b, 0)
        setTotalCartItems({items, totalQuantity});
        
        
    }, [cartItems])

    return (
        <div>
            <div className="item-menu text-center mt-5">
                <button  className="item-btn " onClick={() => onItemMenuClick("breakfast")}>Breakfast</button>
                <button  className="item-btn active" onClick={() => onItemMenuClick("lunch")}>Lunch</button>
                <button  className="item-btn" onClick={() => onItemMenuClick("dinner")}>Dinner</button>
            </div>
            
            <FoodItems items={items} handelCart={handelCart}></FoodItems>
            
        </div>
    );
};

export default Shop;