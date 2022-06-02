import {
    LOAD_PRODUCT_ERROR,
    LOAD_PRODUCT_LOADING,
    LOAD_PRODUCT_SUCCESS,
} from "../actions/actions";

const initialState = {
    data: {},
    loading: false,
    error: "",
};

export default function loadProduct(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCT_LOADING: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }
        case LOAD_PRODUCT_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        }
        case LOAD_PRODUCT_ERROR: {
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
