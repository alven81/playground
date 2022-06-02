import {
    LOAD_CURRENCIES_ERROR,
    LOAD_CURRENCIES_LOADING,
    LOAD_CURRENCIES_SUCCESS,
} from "../actions/actions";

const initialState = {
    data: [],
    loading: false,
    error: "",
};

export default function loadCurrencies(state = initialState, action) {
    switch (action.type) {
        case LOAD_CURRENCIES_LOADING: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }
        case LOAD_CURRENCIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        }
        case LOAD_CURRENCIES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
}
