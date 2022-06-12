import { SET_SELECTED_PRODUCT_ID } from "../constants";

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
