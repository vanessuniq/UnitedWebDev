export const questionsReducer = (state = { questions: [], loading: false, error: [] }, action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS_PENDING':
            return {
                ...state,
                questions: [...state.questions],
                loading: true,
                error: []
            }
        case 'FETCH_QUESTIONS_FULFILLED':
            return {
                ...state,
                questions: state.questions.concat(action.payload),
                loading: false,
                error: []
            }
        case 'POST_QUESTION_REJECTED':
            return {
                ...state,
                questions: [...state.questions],
                loading: false,
                error: state.error.concat(action.payload)
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: state.questions.concat(action.payload),
                loading: false,
                error: []
            }
        case 'DELETE_QUESTION':
            return {
                ...state,
                questions: state.questions.filter(question => question.id !== action.payload)

            }
        default:
            return state
    }
}