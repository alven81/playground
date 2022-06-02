import {SET_CATEGORY} from "../actions/actions";

const initialState = {
    data: [0, "all"]
};

export default function category(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY: {
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
