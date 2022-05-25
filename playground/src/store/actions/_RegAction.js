function openRegModal (key) {
    return {
        type: "OPEN_REG_MODAL",
        payload: key
    }
}

function closeRegModal (key) {
    return {
        type: "CLOSE_REG_MODAL",
        payload: key
    }
}

export { openRegModal, closeRegModal }