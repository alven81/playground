const initialState = { isOpenLog: false }

 const LogModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOG_MODAL":
            return {
                ...state,
                isOpenLog: action.payload
            }
        case "CLOSE_LOG_MODAL":
            return {
                ...state,
                isOpenLog: action.payload
            }
        default:
            return state
    }
}
    
export { LogModalReducer }