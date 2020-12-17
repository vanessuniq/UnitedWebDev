import React from 'react'
import { Fragment } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PostCard from '../../helpers/PostCard'
import AnswerForm from '../answers/AnswerForm'

function SingleQuestionPage({questions, currentUser, deleteQuestion, deleteAnswer, postAnswer, postErrors}) {
    // retrieve id from params and find question by id
    const {questionId}= useParams()
    const history = useHistory()
    const question = questions.find(quest => quest.id === parseInt(questionId, 10))

    // render question info: title, body, author, answers list
    const renderQuestion = () =>  {
        if (question){
            // sort answers by most recent if answers
            const answers = question.answers? 
                question.answers.sort((a,b) => b.created_at.localeCompare(a.created_at) ).map(ans => (
                <PostCard key={ans.id.toString()} post={ans} body={ans.body}  currentUser={currentUser}
                    // callback function on delete btn click
                    deleteQuestion={() => {
                        deleteAnswer(ans.id);
                        history.push(`/questions/${questionId}`)
                    }}/>
                )) : null
         return (
             <Fragment>
                <PostCard post={question} body={question.body}  currentUser={currentUser} deleteQuestion={() => {
                    deleteQuestion(question.id)
                    history.push('/')
                }}/>
                <div style={{'marginLeft': '25px', 'marginTop': '10px'}}>
                    <h2 className='text-xl text-indigo-500 mb-2 max-w-sm lg:max-w-full text-center'>Your Answer</h2>
                    <AnswerForm currentUser={currentUser} postAnswer={postAnswer} postErrors={postErrors}/>
                    {answers}
                </div>
                
             </Fragment>
         )
        } else {
         <h2>Question not found!</h2>
        };
    }
    return (
        <section className="mb-8">
            {renderQuestion()}
        </section>
    )
}

export default SingleQuestionPage
