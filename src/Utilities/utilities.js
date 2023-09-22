const addToLocalStorage = id => {
    let shoppingCartObj = {};
    const existedShoppingCart = localStorage.getItem('shoppingCart');
    if (existedShoppingCart) {
        shoppingCartObj = JSON.parse(existedShoppingCart);
    }
    let quantity = shoppingCartObj[id];
    if (!quantity) {
        shoppingCartObj[id] = 1;
    }
    else {
        shoppingCartObj[id] = quantity + 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartObj));
}



export default addToLocalStorage;