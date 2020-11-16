import { postConfig } from "../helpers/configOptions"
import { history } from "../helpers/history"
import { error, success } from "../helpers/notifications"


export const fetchQuestions = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_QUESTIONS_PENDING' })
        fetch('http://localhost:8080/api/v1/questions').then(resp => resp.json()).then(questions => {
            dispatch({ type: 'FETCH_QUESTIONS_FULFILLED', payload: questions })
        }).catch(e => error(e))
    }
}

export const postQuestion = (question) => {
    return async dispatch => {
        try {
            const data = await fetch('http://localhost:8080/api/v1/questions', postConfig(question))
                .then(resp => resp.json())
            if (data.errors) {
                dispatch(postQuestionsFailled(data.errors))
            } else {
                dispatch(addQuestion(data.question))
                success('Your question has been posted')
                history.push('/questions/' + data.question.id)
            };
        } catch (e) {
            error(e)
            throw e
        }
    };
};

const postQuestionsFailled = (error) => {
    return {
        type: 'POST_QUESTION_REJECTED',
        payload: error
    };
}

const addQuestion = (question) => {
    return {
        type: 'ADD_QUESTION',
        payload: question
    }
}