function leftSideMenuStatus(index) {
    return {
        type: "SET_LEFT_SIDE_MENU_STATUS",
        payload: index
    }
}

export { leftSideMenuStatus }