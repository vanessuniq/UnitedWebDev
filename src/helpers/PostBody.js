import React from 'react'

function PostBody({ body }) {
    return ( 
        <p className = "text-gray-700 text-base" > { body } </p>
    )
}

export default PostBody

PostBody.defaultProps = {
    body: 'Error'
};