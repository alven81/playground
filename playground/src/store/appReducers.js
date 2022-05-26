import {default as reduxСategories} from "./reducer/categoriesReducer"
import {default as reduxMenu} from "./reducer/menuReducer"
import {default as reduxCurrencies} from "./reducer/currenciesReducer"
import {default as reduxCurrency} from "./reducer/currencyReducer"
import {default as reduxCategory} from "./reducer/categoryReducer"
import {combineReducers} from "redux";


const reducers = combineReducers({
    reduxСategories,
    reduxMenu,
    reduxCurrencies,
    reduxCurrency,
    reduxCategory
});

export default reducers;
