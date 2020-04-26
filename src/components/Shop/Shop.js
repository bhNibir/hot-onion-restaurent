import React, { useState, useEffect} from 'react';
import './Shop.css'
import FoodItems from '../FoodItems/FoodItems';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useAlert} from 'react-alert';

const Shop = (props) => {
    const { setTotalCartItems} = props
    const [foodItems, setFoodItems] = useState([]) 
    const [items, setItems] = useState([])   
    const [cartItems, setCartItems] = useState([])
    const alert = useAlert()
    const [activeClass, setActiveClass] = useState("lunch")

    
    useEffect(()=>{
        fetch('https://mighty-headland-40172.herokuapp.com/foodItems/')
        .then(res => res.json())
        .then(items => {
            setFoodItems(items)
            setItems(items.filter(item => item.category === 'lunch'))
        })
    },[])

    const onItemMenuClick = (value) => {
        setItems(foodItems.filter(item => item.category === value));  
        setActiveClass(value)      
    }


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
                <button  className={activeClass === "breakfast" ? "item-btn active" : " item-btn"} onClick={() => onItemMenuClick("breakfast")}>Breakfast</button>
                <button  className={activeClass === "lunch" ? "item-btn active" : " item-btn"} onClick={() => onItemMenuClick("lunch")}>Lunch</button>
                <button  className={activeClass === "dinner" ? "item-btn active" : " item-btn"} onClick={() => onItemMenuClick("dinner")}>Dinner</button>
            </div>
            
            <FoodItems items={items} handelCart={handelCart}></FoodItems>
            
        </div>
    );
};

export default Shop;