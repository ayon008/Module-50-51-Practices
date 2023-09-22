import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import addToLocalStorage from '../../Utilities/utilities';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCart = product => {
        let newCart = [];
        newCart = [...selectedProducts, product];
        const matched = newCart.find(cart => cart.id === product.id);
        const notMatched = newCart.filter(cart => cart.id !== product.id);
        newCart = [matched, ...notMatched];
        let quantity = matched.quantity;
        if (!matched) {
            product.quantity = 1;
        }
        else {
            product.quantity = quantity + 1;
        }
        setSelectedProducts(newCart);
        addToLocalStorage(product.id);
    };
    useEffect(() => {
        let savedProducts = [];
        let dataFromLocalStorageString = localStorage.getItem('shoppingCart');
        let dataFromLocalStorage = JSON.parse(dataFromLocalStorageString);
        for (const id in dataFromLocalStorage) {
            let savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                let quantity = dataFromLocalStorage[id];
                savedProduct.quantity = quantity;
                console.log(dataFromLocalStorage, savedProduct);
                // console.log(quantity);
                savedProducts.push(savedProduct);
            }
        }
        setSelectedProducts(savedProducts);
    }, [products]);


    return (
        <div className='shop'>
            <div className='productContainer'>
                {products.map(product => <Product key={product.id} buttonClicker={handleCart} productDetails={product}> </Product>)};
            </div>
            <div className="cart-container">
                <Cart cart={selectedProducts}></Cart>
            </div>
        </div>
    );
};

export default Shop;