import {WAIT_FOR_CART} from "../actions/actions";

const initialState = {
    data: null };

export default function reduxForCartReducer(state = initialState, action) {
    switch (action.type) {
        case WAIT_FOR_CART: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
