function openLogModal (key) {
    return {
        type: "OPEN_LOG_MODAL",
        payload: key
    }
}

function closeLogModal (key) {
    return {
        type: "CLOSE_LOG_MODAL",
        payload: key
    }
}

export { openLogModal, closeLogModal }