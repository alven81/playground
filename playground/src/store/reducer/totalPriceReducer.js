import { CALC_TOTAL_PRICE } from "../constants";
import filterTotalPrice from "../../utils/filterTotalPrice";

const initialState = {
    data: [0],
};

export default function totalPrice(state = initialState, action) {
    switch (action.type) {
        case CALC_TOTAL_PRICE: {
            if (filterTotalPrice(state.data, action.payload) === -1) {
                return {
                    ...state,
                    data: [...state.data, [...action.payload]],
                };
            }
        }
        default: {
            return state;
        }
    }
}
