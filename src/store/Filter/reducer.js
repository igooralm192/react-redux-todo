const initialState = {
    filter: 'active'
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return {
                filter: action.filter
            }
        }

        default: return state
    }
}