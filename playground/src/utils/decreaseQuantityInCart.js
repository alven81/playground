function decreaseQuantityInCart(productInCart, productInCartId, addToCart) {
    if (productInCart[1] === productInCartId) {
        if (productInCart[0] !== 0) {
            productInCart[0] -= 2;
            addToCart(productInCart);
        }
    }
}
export default decreaseQuantityInCart;
