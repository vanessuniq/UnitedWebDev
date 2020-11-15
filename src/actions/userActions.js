import { getProfileConfig, postConfig } from "../helpers/configOptions";
import { history } from "../helpers/history";
import { error, success, warning } from "../helpers/notifications";

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
            dispatch({ type: 'CREATING_OR_GETTING_USER' })
            const data = await fetch('http://localhost:8080/api/v1/users', postConfig(user)).then(resp => resp.json())
            if (data.errors) {
                dispatch(authFailed(data.errors))
            } else {
                localStorage.setItem('token', data.jwt)
                success(`Welcome ${data.user.username}, your account has been created!`)
                dispatch(loginUser(data.user))
                history.goBack()
            };
        } catch (e) {
            error(e)
            throw e
        }
    };
};

export const login = (user) => {
    return async dispatch => {
        try {
            dispatch({ type: 'CREATING_OR_GETTING_USER' })
            const data = await fetch('http://localhost:8080/api/v1/login', postConfig(user)).then(resp => resp.json())
            if (data.failure) {
                dispatch(authFailed(data.failure))
            } else {
                localStorage.setItem('token', data.jwt)
                success(`Welcome back ${data.user.username}`)
                dispatch(loginUser(data.user))
                history.goBack()
            };
        } catch (e) {
            error(e)
            throw e
        }
    };
};

export const getProfile = () => {
    return async dispatch => {
        try {

            const token = localStorage.token;
            if (token) {
                const data = await fetch('http://localhost:8080/api/v1/auto_login', getProfileConfig(token))
                    .then(resp => resp.json());
                if (data.message) {
                    localStorage.removeItem('token')
                    warning(data.message)
                    history.push('/login')

                } else {
                    dispatch(loginUser(data.user))
                };

            }
        } catch (e) {
            error(e)
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