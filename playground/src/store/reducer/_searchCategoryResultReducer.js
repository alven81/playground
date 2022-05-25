
 const initialState = { searchCategoryResult: []}
 
 const loadSearchCategoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_SEARCH_CATEGORY_RESULT":
            return {
                ...state,
                searchCategoryResult: [...action.payload]
            }

        default:
            return state
    }
}
    
export default loadSearchCategoryReducer