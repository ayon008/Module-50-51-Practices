import React from 'react';
import './Cart.css';



const Cart = props => {
    const cart = props.cart;
    let price = 0;
    let shippingCharge = 0;
    let showQuantity = 0;
    for (const product of cart) {
        showQuantity = product.quantity + showQuantity;
        price = price + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = parseFloat((price * 0.07).toFixed(2));
    let total = price + shippingCharge + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: : {showQuantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${total}</h3>
        </div>
    );
};

export default Cart;