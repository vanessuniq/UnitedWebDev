import { deleteQuestionConfig, postQuestionConfig } from "../helpers/configOptions";
import { error, success } from "../helpers/notifications";
import { postQuestionsFailled } from "./questionActions"
export const postAnswer = (answer) => {
    return async dispatch => {
        try {
            const token = localStorage.token
            if (token) {
                const data = await fetch('http://localhost:8080/api/v1/answers', postQuestionConfig(answer, token))
                    .then(resp => resp.json())
                if (data.errors) {
                    dispatch(postQuestionsFailled(data.errors))
                } else {
                    dispatch(addAnswer({ questionId: answer.answer.question_id, answer: data.answer }))
                };
            }
        } catch (e) { error(e) }
    };
};

function addAnswer(answer) {
    return {
        type: 'ADD_ANSWER',
        payload: answer
    };
}

export const fetchDeleteAnswer = (answerId) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`http://localhost:8080/api/v1/answers/${answerId}`, deleteQuestionConfig(token))
                if (data.status === 204) {
                    dispatch(deleteAnswer(answerId))
                    success('Your question has been deleted')

                } else {
                    error(data.json().error)
                };
            }

        } catch (e) { error(e) }
    };
};
export function deleteAnswer(answerId) {
    return {
        type: 'DELETE_ANSWER',
        payload: answerId
    };
}