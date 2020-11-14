import { postConfig } from "../helpers/configOptions";
import { history } from "../helpers/history";

const authFailed = error => ({
    type: 'AUTH_FAILED',
    payload: error
})
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const register = (user) => {
    return async dispatch => {
        try {
            dispatch({ type: 'CREATING USER' })
            const data = await fetch('http://localhost:8080/api/v1/users', postConfig(user)).then(resp => resp.json())
            if (data.errors) {
                dispatch(authFailed(data.errors))
            } else {
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.user))
                history.goBack()
            };
        } catch (e) {
            dispatch(authFailed(e))
            throw e
        }
    };
};

const fetchUsersFulfilled = (users) => ({
    type: 'FETCH_USERS_FULFILLED',
    payload: users
})

export const fetchAllUsers = () => {
    return async dispatch => {
        try {
            const data = await fetch('http://localhost:8080/api/v1/users').then(resp => resp.json())
            dispatch(fetchUsersFulfilled(data))
        } catch (e) {
            dispatch(authFailed(e))
            throw e
        }
    };
};