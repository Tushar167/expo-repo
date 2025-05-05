const initialState = {
}


export const commonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'UPDATE_USER':
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}