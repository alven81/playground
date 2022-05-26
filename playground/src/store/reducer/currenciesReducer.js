import {LOAD_CURRENCY_ERROR, LOAD_CURRENCY_LOADING, LOAD_CURRENCY_SUCCESS} from "../actions/actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxCurrenciesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CURRENCY_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_CURRENCY_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_CURRENCY_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}
