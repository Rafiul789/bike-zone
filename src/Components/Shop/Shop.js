import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

import './Shop.css'

const Shop = () => {
    const[bikes,setBikes]=useState([])
const[cart,setCart]=useState([])

const[add,setItem]=useState([])

    useEffect(()=>{
fetch('bikes.json')
.then(res=>res.json())
.then(data=>setBikes(data))

    },[])

    const handleCart =(bike)=>{
        const newCart=[...cart,bike]
        setCart(newCart)
    }
// const chooseItem=(add)=>{
//     let random = add[Math.floor(Math.random()*add.length)];
//     setItem(random)
// }

    return (
        <div  className="shop-container">
            <div className="product-container">
{bikes.map(bike=><Bike key={bike.id} bike={bike} handleCart={handleCart}  ></Bike>)}
            </div> <div className="cart-container">
<h3>Order</h3>      {cart.map((item) => (
    
     <h3 key={item.id} >{item.name}</h3> 
          
        ))}  

<button className="select-button"> <p>Choose 1 item</p></button>
            </div>
        </div>
    );
};

export default Shop;