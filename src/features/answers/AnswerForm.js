import React, { Fragment, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { success } from '../../helpers/notifications'
import RenderErrors from '../../helpers/RenderErrors'

export default function AnswerForm({currentUser, postAnswer, postErrors}) {
    const {questionId} = useParams();
    const history = useHistory();
    const [body, setbody] = useState('')
    const handleInputChange = (e) => {
        setbody(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const answer = {answer: {body, user_id: currentUser.id, question_id: parseInt(questionId)}}
        await postAnswer(answer)

        if (postErrors.length === 0) {
            success('Your answer has been successfully posted')
            setbody(''); 
            history.goBack()
        }

    }
    return (
        <Fragment>
            
            
            <form className='bg-white shadow-md w-full max-w-sm lg:max-w-full lg:flex rounded px-8 pt-6 pb-8 ml-0 mb-4 '
            onSubmit={handleSubmit}>
                <RenderErrors errors={postErrors}/>
                <textarea rows='3' className='form-textarea border-black mt-1 ml-10 w-4/5 h-3/4 block'
                name="body"
                value={body}
                onChange={handleInputChange}
            />
            <button type="submit" disabled={!body}
                className={`button focus:shadow-outline mt-4 ml-10 focus:outline-none ${body? 'hover:bg-green-400': ''}`}
            >
                Post Your Answer
            </button>
            </form>
        </Fragment>
    )
}
