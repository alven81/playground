const initialState = { indexList: []}

 const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_INDEX":
            return {
                ...state,
                indexList: action.payload
            }
        default:
            return state
    }
}

export { indexReducer }