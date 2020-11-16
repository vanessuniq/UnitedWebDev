export const postConfig = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    }
};
export const postQuestionConfig = (data, token) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }
};
export const deleteQuestionConfig = (token) => {
    return {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
};
export const getProfileConfig = (token) => {
    return {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
}