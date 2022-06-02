import {
    LOAD_MENU_ERROR,
    LOAD_MENU_LOADING,
    LOAD_MENU_SUCCESS,
} from "../actions/actions";

const initialState = {
    data: [],
    loading: false,
    error: "",
};

export default function loadMenu(state = initialState, action) {
    switch (action.type) {
        case LOAD_MENU_LOADING: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }
        case LOAD_MENU_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        }
        case LOAD_MENU_ERROR: {
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
