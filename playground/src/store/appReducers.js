import {default as reduxСategories} from "./reducer/categoriesReducer"
import {default as reduxMenu} from "./reducer/menuReducer"
import {default as reduxCurrencies} from "./reducer/currenciesReducer"
import {default as reduxProduct} from "./reducer/productReducer"
import {default as reduxCurrency} from "./reducer/currencyReducer"
import {default as reduxCategory} from "./reducer/categoryReducer"
import {default as reduxProductId} from "./reducer/setSelectedProductId"
import {combineReducers} from "redux";


const reducers = combineReducers({
    reduxСategories,
    reduxMenu,
    reduxCurrencies,
    reduxCurrency,
    reduxCategory,
    reduxProductId,
    reduxProduct
});

export default reducers;
