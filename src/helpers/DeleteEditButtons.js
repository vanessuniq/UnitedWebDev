import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DeleteEditButtons ({deleteQuestion, post}) {
    return (
       <Fragment>
        {!!post.title && <button type='button' className='reaction-button'>
            <Link to={`/editQuestion/${post.id}`} 
                className="text-blue-400 hover:text-blue-900 font-bold leading-none">
            Edit
            </Link>
        </button>}
        <button type='button' className='reaction-button' onClick={() =>{ 
            const sure = window.confirm('Would you like to delete your post?')
            if (sure) {
                deleteQuestion(post.id)
            }
            }}>
            <span className="text-red-400 hover:text-red-900 font-bold leading-none">Delete</span>
        </button>
       </Fragment>
    )
}
