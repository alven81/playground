function showAlertMessage (key) {
    return {
        type: "SHOW_ALERT_MESSAGE",
        payload: key
    }
}


export { showAlertMessage }