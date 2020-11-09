export const fetchQuestions = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_QUESTIONS_PENDING' })
        fetch('http://localhost:8080/api/v1/questions').then(resp => resp.json()).then(questions => {
            dispatch({ type: 'FETCH_QUESTIONS_FULFILLED', payload: questions })
        }).catch(error => dispatch({ type: 'FETCH_QUESTIONS_REJECTED', payload: error }))
    }
}