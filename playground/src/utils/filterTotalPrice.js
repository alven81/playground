function findSameProduct(arrayValuesForTotalPrice, priceForCheck) {
    let isIt = 0;
    //console.log("0: ",price, ", 1: ", id)
    isIt = arrayValuesForTotalPrice.findIndex(
        (value) => JSON.stringify(value[1]) === JSON.stringify(priceForCheck[1])
        //(value) => console.log("1: ",value[2], ", 2: ", product[2])
    );
    if (isIt !== -1) {
        console.log(priceForCheck[1]);
        return priceForCheck[1];
    }
    return 0;
}

export default findSameProduct;
