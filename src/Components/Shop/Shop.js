import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const[bikes,setBikes]=useState([])

    useEffect(()=>{
fetch('bikes.json')
.then(res=>res.json())
.then(data=>setBikes(data))

    },[])
    return (
        <div  className="shop-container">
            <div className="product-container">
<h1>Products:{bikes.length}</h1>
            </div> <div className="order-container">
<h1>Order</h1>
            </div>
        </div>
    );
};

export default Shop;