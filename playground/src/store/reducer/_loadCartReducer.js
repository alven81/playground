
 const initialState = { inCart: []}
 
 const loadCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_CART_DATA":
            return {
                ...state,
                inCart: [ ...action.payload]
            }

        default:
            return state
    }
}
    
export default loadCartReducer