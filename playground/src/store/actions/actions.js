import Api from "../api";

import {
    LOAD_CATEGORIES_LOADING,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_ERROR,
    LOAD_MENU_LOADING,
    LOAD_MENU_SUCCESS,
    LOAD_MENU_ERROR,
    LOAD_CURRENCIES_LOADING,
    LOAD_CURRENCIES_SUCCESS,
    LOAD_CURRENCIES_ERROR,
    LOAD_PRODUCT_LOADING,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_ERROR,
    LOAD_CART_ELEMENT_LOADING,
    LOAD_CART_ELEMENT_SUCCESS,
    LOAD_CART_ELEMENT_ERROR,
    SET_CURRENCY,
    SET_CATEGORY,
    SET_SELECTED_PRODUCT_ID,
    WAIT_FOR_CART,
    ADD_TO_CART,
    CALC_TOTAL_PRICE,
} from "../constants";

export const loadCategories = (query) => (dispatch) => {
    dispatch({ type: LOAD_CATEGORIES_LOADING });
console.log("this:", query);
    Api.getData(query)
        .then((response) => response.data.data)
        .then((response) => response.category.products)
        .then(
            (data) => dispatch({ type: LOAD_CATEGORIES_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_CATEGORIES_ERROR,
                    error: error.message || "Unexpected Error!!!",
                })
        );
};

export const loadMenu = (query) => (dispatch) => {
    dispatch({ type: LOAD_MENU_LOADING });

    Api.getData(query)
        .then((response) => response.data.data)
        .then((response) => response.categories)
        .then(
            (data) => dispatch({ type: LOAD_MENU_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_MENU_ERROR,
                    error: error.message || "Unexpected Error!!!",
                })
        );
};

export const loadCurrencies = (query) => (dispatch) => {
    dispatch({ type: LOAD_CURRENCIES_LOADING });

    Api.getData(query)
        .then((response) => response.data.data)
        .then((response) => response.currencies)
        .then(
            (data) => dispatch({ type: LOAD_CURRENCIES_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_CURRENCIES_ERROR,
                    error: error.message || "Unexpected Error!!!",
                })
        );
};

export const loadProduct = (query, idProduct) => (dispatch) => {
    dispatch({ type: LOAD_PRODUCT_LOADING });

    Api.getData(query, idProduct)
        .then((response) => response.data.data)
        .then((response) => response.product)
        .then(
            (data) => dispatch({ type: LOAD_PRODUCT_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_PRODUCT_ERROR,
                    error: error.message || "Unexpected Error!!!",
                })
        );
};

export const loadCartElement = (query, itemId) => (dispatch) => {
    dispatch({ type: LOAD_CART_ELEMENT_LOADING });

    Api.getData(query, itemId)
        .then((response) => response.data.data)
        .then((response) => response.product)
        .then(
            (data) => dispatch({ type: LOAD_CART_ELEMENT_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_CART_ELEMENT_ERROR,
                    error: error.message || "Unexpected Error!!!",
                })
        );
};

export const setCurrency = (query) => {
    return {
        type: SET_CURRENCY,
        payload: query,
    };
};

export const setCategory = (query) => {
    return {
        type: SET_CATEGORY,
        payload: query,
    };
};

export const setSelectedProductId = (query) => {
    return {
        type: SET_SELECTED_PRODUCT_ID,
        payload: query,
    };
};

export const waitForCart = (query) => {
    return {
        type: WAIT_FOR_CART,
        payload: query,
    };
};

export const addToCart = (query) => {
    return {
        type: ADD_TO_CART,
        payload: query,
    };
};

export const calcTotalPrice = (query) => {
    return {
        type: CALC_TOTAL_PRICE,
        payload: query,
    };
};
