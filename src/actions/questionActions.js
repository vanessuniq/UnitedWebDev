import { deleteQuestionConfig, postQuestionConfig } from "../helpers/configOptions"
import { history } from "../helpers/history"
import { error, success, warning } from "../helpers/notifications"

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
            const token = localStorage.token;
            if (token) {
                const data = await fetch('http://localhost:8080/api/v1/questions', postQuestionConfig(question, token)).then(resp => resp.json())
                if (data.errors) {
                    dispatch(postQuestionsFailled(data.errors))
                } else {
                    dispatch(addQuestion(data.question))
                    success('Your question has been posted')

                };
            } else {
                warning('You must be logged in to post a question')
                history.push('/login')
            };

        } catch (e) {
            error(e)
            throw e
        }
    };
};

export const fetchDeleteQuestion = (questionId) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`http://localhost:8080/api/v1/questions/${questionId}`, deleteQuestionConfig(token))
                if (data.status === 204) {
                    dispatch(deleteQuestion(questionId))
                    success('Your question has been deleted')
                    history.push('/')

                } else {
                    error(data.json().error)
                };
            } else {
                warning('You must be logged in to delete a question')
                history.push('/login')
            };

        } catch (e) { error(e) }
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
export const deleteQuestion = (questionId) => {
    return {
        type: 'DELETE_QUESTION',
        payload: questionId
    };
}