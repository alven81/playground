import {ADD_TO_CART} from "../actions/actions";

const initialState = {
    data: []
};

export default function reduxToCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: 
            console.log("action: ", action.payload)
            console.log("state: ", state.data)
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        
        default: {
            return state;
        }
    }
}
