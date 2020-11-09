import React from 'react';

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
            return questions.map(question => (
                <article key={question.id} className="max-w-sm w-full lg:max-w-full lg:flex post-excerpt">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${question.user.avatar})`}} title="profile picture">
                    </div>
                    <div className=" bg-white p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                        
                            <div className="text-gray-900 font-bold text-xl mb-2">{question.title}</div>
                            <div className='text-sm'>
                                <span className="text-gray-900 leading-none">{question.user.username}</span>
                                <span className="text-gray-600">Date</span>
                            </div>
                            <p className="text-gray-700 text-base">{question.body}</p>
                        </div>
                        <div className="flex items-center">
                            <p>{question.answers.length} comment(s)</p>
                           <button>reaction button</button>
                            <div className="text-sm">
                                {question.votes.length} Vote(s)
                            </div>
                        </div>
                    </div>
                </article>
            ))
        }
    }
    return (
        <section className='posts-list'>
            <h1>Questions</h1>
            {handleQuestionsFetch()}
        </section>
    );
}

export default QuestionsList;
