import Api from "../api"

export const LOAD_CATEGORY_LOADING = 'REDUX_THUNK_LOAD_CATEGORY_LOADING';
export const LOAD_CATEGORY_SUCCESS = 'REDUX_THUNK_LOAD_CATEGORY_SUCCESS';
export const LOAD_CATEGORY_ERROR = 'REDUX_THUNK_LOAD_CATEGORY_ERROR';
export const LOAD_MENU_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_MENU_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_MENU_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';
export const LOAD_CURRENCY_LOADING = 'REDUX_THUNK_LOAD_CURRENCY_LOADING';
export const LOAD_CURRENCY_SUCCESS = 'REDUX_THUNK_LOAD_CURRENCY_SUCCESS';
export const LOAD_CURRENCY_ERROR = 'REDUX_THUNK_LOAD_CURRENCY_ERROR';

export const loadCategory = (query, idCategory) => dispatch => {
    dispatch({ type: LOAD_CATEGORY_LOADING });

    Api.getData(query, idCategory)
        .then(response => response.data.data)
        .then(response => response.categories[idCategory].products)
        .then(
            data => dispatch({ type: LOAD_CATEGORY_SUCCESS, data }),
            error => dispatch({ type: LOAD_CATEGORY_ERROR, error: error.message || 'Unexpected Error!!!' })
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
    dispatch({ type: LOAD_CURRENCY_LOADING });

    Api.getData(query)
        .then(response => response.data.data)
        .then(response => response.currencies)
        .then(
            data => dispatch({ type: LOAD_CURRENCY_SUCCESS, data }),
            error => dispatch({ type: LOAD_CURRENCY_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}; 