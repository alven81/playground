
 const initialState = { searchResult: []}
 
 const loadSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SEARCH_RESULT":
            return {
                ...state,
                searchResult: [...action.payload]
            }

        default:
            return state
    }
}
    
export default loadSearchReducer