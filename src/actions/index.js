export const setUserState = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const logOut = () => {
    return {
        type: 'LOGOUT',
    }
}
