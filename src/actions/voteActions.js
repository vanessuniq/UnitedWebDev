import { deleteQuestionConfig, postQuestionConfig } from "../helpers/configOptions";
import { error } from "../helpers/notifications";
import { updateQuestion } from "./questionActions";

const DOMAIN = "https://united-web-dev-api.herokuapp.com"

export const postVote = (vote) => {
    return async dispatch => {
        try {
            const token = localStorage.token
            if (token) {
                const data = await fetch(`${DOMAIN}/api/v1/votes`, postQuestionConfig(vote, token))
                    .then(resp => resp.json())
                if (data.question) {
                    dispatch(updateQuestion(data.question))
                } else if (data.answer) {
                    dispatch(addAnswerVote(data.answer))
                };
            }
        } catch (e) { error(e) }
    };
};

export const deleteVote = (vote) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`${DOMAIN}/api/v1/votes/${vote.id}`, deleteQuestionConfig(token))
                if (data.status === 204 && vote.votable_type === 'Question') {
                    dispatch(deleteQuestionVote(vote))
                } else if (data.status === 204 && vote.votable_type === 'Answer') {
                    dispatch(deleteAnswerVote(vote))
                };
            }

        } catch (e) { error(e) }
    };
};
const addAnswerVote = (answer) => {
    return {
        type: 'ADD_ANSWER_VOTE',
        payload: answer
    }
}
const deleteAnswerVote = (vote) => {
    return {
        type: 'DELETE_ANSWER_VOTE',
        payload: vote
    }
}

const deleteQuestionVote = (vote) => {
    return {
        type: 'DELETE_QUESTION_VOTE',
        payload: vote
    }
}