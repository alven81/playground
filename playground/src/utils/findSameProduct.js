function findSameProduct(cart, product) {
    let isIt = 0;
    isIt = cart.findIndex(
        (value) => JSON.stringify(value[2]) === JSON.stringify(product[2])
    );
    if (isIt !== -1) {
        cart[isIt][0] = cart[isIt][0] + 1;
    }
    return [isIt, cart];
}

export default findSameProduct;
