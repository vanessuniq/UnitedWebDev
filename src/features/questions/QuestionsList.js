import React from 'react';
import PostCard from '../../helpers/PostCard';

const QuestionsList = ({loading, questions, error}) => {
    const handleQuestionsFetch = () => {
        if (loading) {
            return (
                <div className="flex justify-center">
                    <div className="loader"></div>
                </div>
            )
        } else if (error) {
            return <div>{error}</div>
        } else {
            return questions.map(question => <PostCard key={question.id} post={question} body={question.body.substring(0, 50) + ' ...'}/>)
        }
    }
    return (
        <section className='posts-list mb-8'>
            <h1>Questions</h1>
            {handleQuestionsFetch()}
        </section>
    );
}

export default QuestionsList;
