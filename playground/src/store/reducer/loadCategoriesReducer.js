import {
	LOAD_CATEGORIES_ERROR,
	LOAD_CATEGORIES_LOADING,
	LOAD_CATEGORIES_SUCCESS,
} from "../actions/actions";

const initialState = {
	data: [],
	loading: false,
	error: "",
};

export default function loadCategories(state = initialState, action) {
	switch (action.type) {
		case LOAD_CATEGORIES_LOADING: {
			return {
				...state,
				loading: true,
				error: "",
			};
		}
		case LOAD_CATEGORIES_SUCCESS: {
			return {
				...state,
				data: action.data,
				loading: false,
			};
		}
		case LOAD_CATEGORIES_ERROR: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default: {
			return state;
		}
	}
}
