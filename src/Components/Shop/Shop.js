import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';

import './Shop.css'

const Shop = () => {
    const[bikes,setBikes]=useState([])
const[cart,setCart]=useState([])



    useEffect(()=>{
fetch('bikes.json')
.then(res=>res.json())
.then(data=>setBikes(data))

    },[])

    const handleCart =(bike)=>{
        const newCart=[...cart,bike]
        setCart(newCart)
    }

    const removeItem=()=>{
        setCart([])
    }


    return (
        <div  className="shop-container">
            <div className="product-container">
{bikes.map(bike=><Bike key={bike.id} bike={bike} handleCart={handleCart}  ></Bike>)}
            </div> <div className="cart-container">
<h3>Order</h3>   <Cart cart={cart} > </Cart>   
<button onClick={()=>removeItem()} className="select-button"> <p>Remove Item</p></button>


            </div>
        </div>
    );
};

export default Shop;