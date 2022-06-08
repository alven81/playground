function decreaseQuantityInCart(productInCart, productInCartId, addToCart) {
    if (productInCart[1] === productInCartId) {
        if (productInCart[0] !== 1) {
            productInCart[0] -= 2;
            addToCart(productInCart);
            return;
        }
    } else return;
}
export default decreaseQuantityInCart;
