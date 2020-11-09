export const questionsReducer = (state = { questions: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS_PENDING':
            return {
                ...state,
                questions: [...state.questions],
                loading: true,
                error: null
            }
        case 'FETCH_QUESTIONS_FULFILLED':
            return {
                ...state,
                questions: state.questions.concat(action.payload),
                loading: false,
                error: null
            }
        case 'FETCH_QUESTIONS_REJECTED':
            return {
                ...state,
                questions: [...state.questions],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}