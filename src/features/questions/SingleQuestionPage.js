import React from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from '../../helpers/PostCard'

function SingleQuestionPage({questions}) {
    const {questionId}= useParams()
    const question = questions.find(quest => quest.id === parseInt(questionId, 10))
    //debugger
    const renderQuestion = () =>  {
        if (question){
            const answers = question.answers? question.answers.map(ans => <PostCard key={ans.id.toString()} post={ans} body={ans.body}/>) : null
         return (
             <Fragment>
                <PostCard post={question} body={question.body}/>
                <div style={{'marginLeft': '25px', 'marginTop': '10px'}}>{answers}</div>
                
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
