function findSameProduct(arrayValuesForTotalPrice, priceForCheck) {
    //console.log("in function: ", arrayValuesForTotalPrice);
    let isIt = 0;
    //console.log("0: ",price, ", 1: ", id)
    isIt = arrayValuesForTotalPrice.findIndex(
        (value) => value[1] === priceForCheck[1]
        //(value) => console.log("1: ",value[2], ", 2: ", product[2])
    );
    console.log("isIt",isIt);
    return isIt
    // if (isIt !== -1) {
    //     //console.log(priceForCheck[1]);
    //     return priceForCheck[0];
    // }
    // return priceForCheck[0];
}

export default findSameProduct;
