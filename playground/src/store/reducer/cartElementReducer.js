import {
    LOAD_CART_ELEMENT_ERROR,
    LOAD_CART_ELEMENT_LOADING,
    LOAD_CART_ELEMENT_SUCCESS,
} from "../constants";

const initialState = {
    data: {},
    loading: false,
    error: "",
};

export default function cartElement(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART_ELEMENT_LOADING: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }
        case LOAD_CART_ELEMENT_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        }
        case LOAD_CART_ELEMENT_ERROR: {
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
