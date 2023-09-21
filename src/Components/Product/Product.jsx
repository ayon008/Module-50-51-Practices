import React from 'react';
import './Product.css'
const Product = props => {
    const { name, seller, price, ratings, shipping, img } = props.productDetails;
    return (
        <div className='product'>
            <div className='product-details'>
                <img className='productImg' src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h4>Price: {price}</h4>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default Product;