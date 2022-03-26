import React, { useState } from 'react';
import './Cart.css'


const Cart = ({cart}) => {
  
    const[add,setItem]=useState([])
  
    const chooseItem=()=>{
        let random = cart[Math.floor(Math.random()*cart.length)];
        setItem(random)
        
    }

    

 
     
    
     
    return (
        <div>
        
    {cart.map((item) => ( 
        <h3 key={item.id} > 
        {item.name}</h3>  ))}
  
      <div className="cart-btn"><button onClick={()=>chooseItem(add)}   className="select-button"> <p>Choose 1 item</p></button> 
      <h1>{add.name}</h1>    </div>
    
        </div>
    );
};

export default Cart;