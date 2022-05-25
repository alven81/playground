const initialState = { alertIs: {
                        status: false,
                        message : ""
                    } }

 const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ALERT_MESSAGE":
            return {
                ...state,
                alertIs: {...action.payload}
            }
        default:
            return state
    }
}
    
export { AlertReducer }