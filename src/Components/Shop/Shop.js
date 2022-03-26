import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Shop.css'

const Shop = () => {
    const[bikes,setBikes]=useState([])

    useEffect(()=>{
fetch('bikes.json')
.then(res=>res.json())
.then(data=>setBikes(data))

    },[])

    const handleCart =(bike)=>{
        console.log('clicked')
    }
    return (
        <div  className="shop-container">
            <div className="product-container">
{bikes.map(bike=><Bike key={bike.id} bike={bike} handleCart={handleCart}  ></Bike>)}
            </div> <div className="order-container">
<h1>Order</h1>
            </div>
        </div>
    );
};

export default Shop;