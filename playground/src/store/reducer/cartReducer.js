import findSameProduct from "../../utils/findSameProduct";
import { ADD_TO_CART } from "../actions/actions";

const initialState = {
	data: [],
};

export default function cart(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			if (findSameProduct(state.data, action.payload)[0] === -1) {
				return {
					...state,
					data: [...state.data, action.payload],
				};
			} else {
				return {
					...state,
					data: [...state.data],
				};
			}
		}
		default: {
			return state;
		}
	}
}
