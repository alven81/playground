import Api from "../api"

export const LOAD_CATEGORIES_LOADING = 'REDUX_THUNK_LOAD_CATEGORIES_LOADING';
export const LOAD_CATEGORIES_SUCCESS = 'REDUX_THUNK_LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'REDUX_THUNK_LOAD_CATEGORIES_ERROR';
export const LOAD_MENU_LOADING = 'REDUX_THUNK_LOAD_MENU_LOADING';
export const LOAD_MENU_SUCCESS = 'REDUX_THUNK_LOAD_MENU_SUCCESS';
export const LOAD_MENU_ERROR = 'REDUX_THUNK_LOAD_MENU_ERROR';
export const LOAD_CURRENCIES_LOADING = 'REDUX_THUNK_LOAD_CURRENCIES_LOADING';
export const LOAD_CURRENCIES_SUCCESS = 'REDUX_THUNK_LOAD_CURRENCIES_SUCCESS';
export const LOAD_CURRENCIES_ERROR = 'REDUX_THUNK_LOAD_CURRENCIES_ERROR';
export const LOAD_PRODUCT_LOADING = 'REDUX_THUNK_LOAD_PRODUCT_LOADING';
export const LOAD_PRODUCT_SUCCESS = 'REDUX_THUNK_LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_ERROR = 'REDUX_THUNK_LOAD_PRODUCT_ERROR';
export const SET_CURRENCY = 'REDUX_SET_CURRENCY';
export const SET_CATEGORY = 'REDUX_SET_CATEGORY';
export const SET_SELECTED_PRODUCT_ID = 'REDUX_SET_SELECTED_PRODUCT_ID';
export const WAIT_FOR_CART = 'REDUX_WAIT_FOR_CART';
export const ADD_TO_CART = 'REDUX_ADD_TO_CART';

export const loadCategories = (query, idCategory) => dispatch => {
    dispatch({ type: LOAD_CATEGORIES_LOADING });

    Api.getData(query, idCategory)
        .then(response => response.data.data)
        .then(response => response.categories[idCategory].products)
        .then(
            data => dispatch({ type: LOAD_CATEGORIES_SUCCESS, data }),
            error => dispatch({ type: LOAD_CATEGORIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const loadMenu = (query) => dispatch => {
    dispatch({ type: LOAD_MENU_LOADING });

    Api.getData(query)
        .then(response => response.data.data)
        .then(response => response.categories)
        .then(
            data => dispatch({ type: LOAD_MENU_SUCCESS, data }),
            error => dispatch({ type: LOAD_MENU_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}; 

export const loadCurrencies = (query) => dispatch => {
    dispatch({ type: LOAD_CURRENCIES_LOADING });

    Api.getData(query)
        .then(response => response.data.data)
        .then(response => response.currencies)
        .then(
            data => dispatch({ type: LOAD_CURRENCIES_SUCCESS, data }),
            error => dispatch({ type: LOAD_CURRENCIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}; 

export const loadProduct =  (query, idProduct) => dispatch => {
    dispatch({ type: LOAD_PRODUCT_LOADING });

    Api.getData(query, idProduct)
        .then(response => response.data.data)
        .then(response => response.product)
        .then(
            data => dispatch({ type: LOAD_PRODUCT_SUCCESS, data }),
            error => dispatch({ type: LOAD_PRODUCT_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}; 

export const setCurrency = (query) => {
    return {
        type: SET_CURRENCY,
        payload: query
    };
};

export const setCategory = (query) => {
    return {
        type: SET_CATEGORY,
        payload: query
    };
}; 

export const setSelectedProductId = (query) => {
    return {
        type: SET_SELECTED_PRODUCT_ID,
        payload: query
    };
};

export const waitForCart = (query) => {
    return {
        type: WAIT_FOR_CART,
        payload: query
    };
}; 

export const addToCart = (query) => {
    return {
        type: ADD_TO_CART,
        payload: query
    };
}; 