import { default as reduxСategories } from "./reducer/categoriesReducer";
import { default as reduxMenu } from "./reducer/menuReducer";
import { default as reduxCurrencies } from "./reducer/currenciesReducer";
import { default as reduxProduct } from "./reducer/productReducer";
import { default as reduxCurrency } from "./reducer/currencyReducer";
import { default as reduxCategory } from "./reducer/categoryReducer";
import { default as reduxProductId } from "./reducer/setSelectedProductIdReducer";
import { default as reduxWaitForCart } from "./reducer/forCartReducer";
import { default as reduxCart } from "./reducer/toCartReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    reduxСategories,
    reduxMenu,
    reduxCurrencies,
    reduxCurrency,
    reduxCategory,
    reduxProductId,
    reduxProduct,
    reduxWaitForCart,
    reduxCart,
});

export default reducers;
