import { SET_CURRENCY } from "../actions/actions";

const initialState = {
    data: [],
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
