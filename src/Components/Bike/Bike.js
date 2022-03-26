import React from 'react';
import './Bike.css'

const Bike = ({bike}) => {
    const{name,seller,price,ratings,img}=bike;
    
    return (
        <div  className="bike-container">

            <div> <img src={img} alt="bike"></img></div>
            <div  className="description">  <h3>Name:  {name}</h3>
            <p>Seller: {seller}</p>
            <p>Price: {price}</p>
            <p>Ratings: {ratings}</p>  </div>
           
           
        </div>
    );
};

export default Bike;