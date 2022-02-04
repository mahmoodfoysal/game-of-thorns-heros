import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const actor of cart) {
        total = total+ actor.salary;
    }
    return (
        <div>
            <h3>Actors Added: {cart.length}</h3>
            <h4>Total: ${total}</h4>
            <h5>Actors Name: </h5>
            {
                cart.map(actorName =>
                <div className='div-color'><li className='mb-2'><img className='img' src={actorName.img} alt="" />{actorName.name}</li></div>
                
                )
            }
        </div>
    );
};

export default Cart;