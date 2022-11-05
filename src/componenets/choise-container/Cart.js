import React from 'react';
import './Cart.css'

const Cart = ({car}) => {
    return (
        <div className="cart">
            <img src={car.img}alt="" />
            <h4>{car.name}</h4>
        </div>
    );
};



export default Cart;