function findSameProduct(cart, product) {
    let isIt = 0;
    isIt = cart.findIndex((value) => (JSON.stringify(value[1]) === JSON.stringify(product[1])));
    if (isIt !== -1) {
        cart[isIt][0] = cart[isIt][0] + 1;
    }
    return [isIt, cart];
}

export default findSameProduct
