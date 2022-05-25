const initialState = { leftSideMenuStatusIs: false}

 const isLeftSideMenuStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LEFT_SIDE_MENU_STATUS":
            return {
                ...state,
                leftSideMenuStatusIs: action.payload
            }
        default:
            return state
    }
}

export { isLeftSideMenuStatusReducer }