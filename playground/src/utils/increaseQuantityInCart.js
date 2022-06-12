function increaseQuantityInCart(productInCart, productInCartId, addToCart) {
    if (productInCart[1] === productInCartId) {
        addToCart(productInCart);
    }
}

export default increaseQuantityInCart;
