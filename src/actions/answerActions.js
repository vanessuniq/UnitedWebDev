import { postQuestionConfig } from "../helpers/configOptions";
import { postQuestionsFailled } from "./questionActions"
export const postAnswer = (answer) => {
    return async dispatch => {
        try {
            const token = localStorage.token
            if (token) {
                const data = fetch('http://localhost:8080/api/v1/answers', postQuestionConfig(answer, token))
                    .then(resp => resp.json())
                if (data.errors) {
                    dispatch(postQuestionsFailled(data.errors))
                } else {
                    dispatch(addAnswer(data.answer))
                };
            }


        } catch (e) {}
    };
};

function addAnswer(answer) {
    return {
        type: 'ADD_ANSWER',
        payload: answer
    };
}