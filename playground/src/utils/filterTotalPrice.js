function findSameProduct(arrayValuesForTotalPrice, priceForCheck) {
	let isIt = 0;
	isIt = arrayValuesForTotalPrice.findIndex(
		(value) => value[1] === priceForCheck[1]
	);
	console.log("isIt", isIt);
	return isIt;
}

export default findSameProduct;
