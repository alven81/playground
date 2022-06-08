function encreaseQuantityInCart(productInCart, productInCartId, addToCart) {
    if (productInCart[1] === productInCartId) {
        addToCart(productInCart);
        return;
    }
    return;
}

export default encreaseQuantityInCart;
