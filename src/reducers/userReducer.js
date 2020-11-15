const initialState = {
    all: [],
    currentUser: {},
    errors: []
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_FAILED':
            return {
                ...state,
                errors: state.errors.concat(action.payload)
            }
        case 'LOGIN_USER':
            const newUser = state.all.find(user => user.id === action.payload.id)
            if (newUser) {
                return {...state, currentUser: action.payload, errors: [] }
            } else {
                return {...state, all: state.all.concat(action.payload), currentUser: action.payload, errors: [] }
            };
        case 'CREATING_OR_GETTING_USER':
            return {...state, errors: [] }

        case 'FETCH_USERS_FULFILLED':
            return {...state, all: state.all.concat(action.payload) }

        default:
            return state
    }
}