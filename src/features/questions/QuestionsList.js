import React from 'react';
import PostCard from '../../helpers/PostCard';

const QuestionsList = ({loading, questions}) => {
    const handleQuestionsFetch = () => {
        if (loading) {
            return (
                <div className="flex justify-center">
                    <div className="loader"></div>
                </div>
            )
        } else if(questions) {
            return questions.map(question => <PostCard key={question.id} post={question} body={question.body.substring(0, 50) + ' ...'}/>)
        } else {
            return <div>Nothing to display</div>
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
