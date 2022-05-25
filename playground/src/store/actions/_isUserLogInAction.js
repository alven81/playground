function isUserLogIn(credentials) {

    return {
        type: "IS_USER_LOG_IN",
        payload: credentials
    }
}

export { isUserLogIn }