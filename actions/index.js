export const selectUser = (userID) => {
    return {
        type: 'selectUser',
        userID
    }
}

export const createBanks = (banks) => {
    return {
        type: 'selecBanks',
        banks
    }
}