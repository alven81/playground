
 const initialState = { searchResult: []}
 
 const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES_QUERY":
            return {
                ...state,
                searchResult: [...action.payload]
            }

        default:
            return state
    }
}
    
export default categoriesReducer