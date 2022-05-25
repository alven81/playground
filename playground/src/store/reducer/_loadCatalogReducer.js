
 const initialState = { loadCatalog: []}
 
 const loadCatalogReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_CATALOG_DATA":
            return {
                ...state,
                loadCatalog: [ ...action.payload]
            }

        default:
            return state
    }
}
    
export default loadCatalogReducer