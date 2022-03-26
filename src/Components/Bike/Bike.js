import React from 'react';
import './Bike.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Bike = ({bike}) => {
    const{name,seller,price,ratings,img}=bike;
    
    return (
        <div  className="bike-container">

            <div> <img src={img} alt="bike"></img></div>
            <div  className="description">  <h3>Name:  {name}</h3>
            <p>Seller: {seller}</p>
            <p>Price: {price}</p>
            <p>Ratings: {ratings}</p>    <button className="addCart-btn" >  <p>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></p>   </button>  </div>
         
           
        </div>
    );
};

export default Bike;