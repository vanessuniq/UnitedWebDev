import { deleteQuestionConfig, postQuestionConfig, putQuestionConfig } from "../helpers/configOptions"
import { history } from "../helpers/history"
import { error, success, warning } from "../helpers/notifications"

const DOMAIN = "https://united-web-dev-api.herokuapp.com"

export const fetchQuestions = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_QUESTIONS_PENDING' })
        fetch(`${DOMAIN}/api/v1/questions`).then(resp => resp.json()).then(questions => {
            dispatch({ type: 'FETCH_QUESTIONS_FULFILLED', payload: questions })
        }).catch(e => error(e))
    }
}

export const postQuestion = (question) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`${DOMAIN}/api/v1/questions`, postQuestionConfig(question, token)).then(resp => resp.json())
                if (data.errors) {
                    dispatch(postQuestionsFailled(data.errors))
                } else {
                    dispatch(addQuestion(data.question))
                };
            }
        } catch (e) {
            error(e)
            throw e
        }
    };
};
export const fetchUpdateQuestion = (question) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`${DOMAIN}/api/v1/questions/${question.question.id}`, putQuestionConfig(question, token)).then(resp => resp.json())
                if (data.error) {
                    dispatch(postQuestionsFailled(data.error))
                } else {
                    dispatch(updateQuestion(data.question))
                };
            }
        } catch (e) {}
    };
};
export const fetchDeleteQuestion = (questionId) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`${DOMAIN}/api/v1/questions/${questionId}`, deleteQuestionConfig(token))
                if (data.status === 204) {
                    dispatch(deleteQuestion(questionId))
                    success('Your question has been deleted')
                    history.push('/questions')

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

export const postQuestionsFailled = (error) => {
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
export const updateQuestion = (question) => {
    return {
        type: 'UPDATE_QUESTION',
        payload: question
    }
}
export const deleteQuestion = (questionId) => {
    return {
        type: 'DELETE_QUESTION',
        payload: questionId
    };
}