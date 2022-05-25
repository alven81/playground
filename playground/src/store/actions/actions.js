import Api from "../api"

export const LOAD_CATEGORY_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_CATEGORY_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_CATEGORY_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';

export const loadCategory = () => dispatch => {
    dispatch({ type: LOAD_CATEGORY_LOADING });

    Api.getCategory()
        .then(response => response.data.data)
        .then(response => response.categories[0].products)
        //.then(response => console.log(response))
        .then(
            data => dispatch({ type: LOAD_CATEGORY_SUCCESS, data }),
            error => dispatch({ type: LOAD_CATEGORY_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};  