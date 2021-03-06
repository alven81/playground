import { SET_CURRENCY } from "../constants";

const initialState = {
    data: [0],
};

export default function currency(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENCY: {
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
