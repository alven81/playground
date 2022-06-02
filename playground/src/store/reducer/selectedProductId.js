import { SET_SELECTED_PRODUCT_ID } from "../actions/actions";

const initialState = {
    data: [],
};

export default function selectedProductId(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_PRODUCT_ID: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
