import {default as reduxСategories} from "./reducer/categoriesReducer"
import {default as reduxMenu} from "./reducer/menuReducer"
import {default as reduxCurrencies} from "./reducer/currenciesReducer"
import {combineReducers} from "redux";


const reducers = combineReducers({
    reduxСategories,
    reduxMenu,
    reduxCurrencies
});

export default reducers;
