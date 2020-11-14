const initialState = {
    all: [],
    currentUser: {},
    errors: null
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_FAILED':
            return {
                ...state,
                errors: action.payload
            }
        case 'LOGIN_USER':
            const newUser = state.all.find(user => user.id === action.payload.id)
            if (newUser) {
                return {...state, currentUser: action.payload, errors: null }
            } else {
                return {...state, all: state.all.concat(action.payload), currentUser: action.payload, errors: null }
            };
        case 'CREATING_USER':
            return {...state, errors: null }

        case 'FETCH_USERS_FULFILLED':
            return {...state, all: state.all.concat(action.payload) }

        default:
            return state
    }
}