import { default as loadCategories } from "./reducer/loadCategoriesReducer";
import { default as loadMenu } from "./reducer/loadMenuReducer";
import { default as loadCurrencies } from "./reducer/loadCurrenciesReducer";
import { default as loadProduct } from "./reducer/loadProductReducer";
import { default as currency } from "./reducer/currencyReducer";
import { default as category } from "./reducer/categoryReducer";
import { default as selectedProductId } from "./reducer/selectedProductId";
import { default as waitForCart } from "./reducer/waitForCart";
import { default as cart } from "./reducer/cartReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	loadCategories,
	loadMenu,
	loadCurrencies,
	currency,
	category,
	selectedProductId,
	loadProduct,
	waitForCart,
	cart,
});

export default reducers;
