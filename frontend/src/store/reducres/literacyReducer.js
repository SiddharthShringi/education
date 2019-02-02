const initState = {
    literacy: []
}

export const literacyReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_LITERACY_DATA':
            // console.log(action.data)
            return {
                ...state,
                literacy: action.data
            }
        default:
            return state
    }
}