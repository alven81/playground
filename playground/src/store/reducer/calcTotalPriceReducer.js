import { CALC_TOTAL_PRICE } from "../actions/actions";
import filterTotalPrice from "../../utils/filterTotalPrice";

const initialState = {
    data: [0]
};

export default function cart(state = initialState, action) {
    //console.log("reducerrrrrкеуеу", action.payload);
    switch (action.type) {
        case CALC_TOTAL_PRICE: {
            //console.log("reducer filterTotalPrice", state.data, action.payload);
             if (filterTotalPrice(state.data, action.payload) === -1) {
                //console.log("reducer filterTotalPrice", state.data, action.payload);

                return {
                    ...state,
                    data: [...state.data, [...action.payload]],
                }
            }
        }
        // eslint-disable-next-line no-fallthrough
        default: {
            return state;
        }
    }
}


