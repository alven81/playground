import { CALC_TOTAL_PRICE } from "../actions/actions";

const initialState = {
    data: 0,
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case CALC_TOTAL_PRICE: {
            // if (findSameProduct(state.data, action.payload)[0] === -1) {
            //     return {
            //         ...state,
            //         data: [...state.data, action.payload],
            //     };
            //} else 
            //{
                return {
                    ...state,
                    data: state.data + action.payload,
                };
            //}
        }
        default: {
            return state;
        }
    }
}
