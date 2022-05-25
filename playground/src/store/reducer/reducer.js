import {LOAD_CATEGORY_ERROR, LOAD_CATEGORY_LOADING, LOAD_CATEGORY_SUCCESS} from "../actions/actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxThunkReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORY_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_CATEGORY_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_CATEGORY_ERROR: {
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
