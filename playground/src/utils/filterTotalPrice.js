function findSameProduct(arrayValuesForTotalPrice, priceForCheck) {
	let isIt = 0;
	isIt = arrayValuesForTotalPrice.findIndex(
		(value) => value[1] === priceForCheck[1]
	);
	return isIt;
}

export default findSameProduct;
