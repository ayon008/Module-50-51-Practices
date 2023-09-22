import React from 'react';
import './Product.css'
const Product = props => {
    const { name, seller, price, ratings, shipping, img } = props.productDetails;
    const eventHandlerFunction = props.buttonClicker;
    return (
        <div className='product'>
            <div className='product-details'>
                {img ? <img className='productImg' src={img} alt="" /> : <img className='productImg' src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg" alt="" />}
                <div>
                    <h3>{name}</h3>
                    <h4>Price: {price}</h4>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button className='btn' onClick={() => eventHandlerFunction(props.productDetails)}>Add To Cart</button>
        </div>
    );
};

export default Product;