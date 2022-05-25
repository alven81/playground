
 const initialState = { categoryListIs: []}
 
 const loadCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORY_DATA":
            return {
                ...state,
                categoryListIs: action.payload
            }

        default:
            return state
    }
}
    
export default loadCategoryReducer