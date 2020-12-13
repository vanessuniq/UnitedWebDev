import { postQuestionConfig } from "../helpers/configOptions";
import { error } from "../helpers/notifications";
import { updateQuestion } from "./questionActions";

export const postVote = (vote) => {
    return async dispatch => {
        try {
            const token = localStorage.token
            if (token) {
                const data = await fetch('http://localhost:8080/api/v1/votes', postQuestionConfig(vote, token))
                    .then(resp => resp.json())
                if (data.question) {
                    dispatch(updateQuestion(data.question))
                } else if (data.answer) {
                    dispatch(updateAnswer(data.answer))
                };
            }
        } catch (e) { error(e) }
    };
};

const updateAnswer = (answer) => {
    return {
        type: 'UPDATE_ANSWER',
        payload: answer
    }
}