const getStroedCart = () => {
    const stroedCardString = localStorage.getItem('cart');
    if (stroedCardString) {
        return JSON.parse(stroedCardString);
    } else {
        return [];
    }
}

const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = (id) => {
    const cart = getStroedCart();
    cart.push(id);
    // save to local stroage 
    saveCartToLS(cart);
}

export {addToLS, getStroedCart };