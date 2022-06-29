import { default as loadCategories } from "./reducer/categoriesReducer";
import { default as loadMenu } from "./reducer/menuReducer";
import { default as loadCurrencies } from "./reducer/currenciesReducer";
import { default as loadProduct } from "./reducer/productReducer";
import { default as loadCartElement } from "./reducer/cartElementReducer";
import { default as currency } from "./reducer/currencyReducer";
//import { default as category } from "./reducer/categoryReducer";
import { default as selectedProductId } from "./reducer/selectedProductIdReducer";
import { default as waitForCart } from "./reducer/waitForCartReducer";
import { default as cart } from "./reducer/cartReducer";
import { default as calcTotalPrice } from "./reducer/totalPriceReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    loadCategories,
    loadMenu,
    loadCurrencies,
    loadCartElement,
    currency,
    //category,
    selectedProductId,
    loadProduct,
    waitForCart,
    cart,
    calcTotalPrice,
});

export default reducers;
