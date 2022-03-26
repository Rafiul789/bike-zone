import React from 'react';

const Cart = (props) => {
    const {name}=props.bike;
    return (
        <div> 
            <p>{name}</p>
           
        </div>
    );
};

export default Cart;