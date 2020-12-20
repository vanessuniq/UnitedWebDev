import React, { useEffect, useState } from 'react';
import PostCard from '../../helpers/PostCard';
import FilterQuestions from './FilterQuestions';

const QuestionsList = ({loading, questions, currentUser, deleteQuestion}) => {
    const [filteredQuestions, setFilteredQuestions] = useState({
        topic: 'All topics',
        list: []
    })
    useEffect(() => {
       setFilteredQuestions({
           list: [...questions].sort((a,b) => b.created_at.localeCompare(a.created_at))
       })
    }, [questions])
    const onSelectChange = (e) => {
        const topic = e.target.value;
        if (topic !== 'All topics') {
            setFilteredQuestions({
                ...filteredQuestions,
                topic: topic,
                list: questions.filter(question => question.topic === topic)
                                .sort((a,b) => b.created_at.localeCompare(a.created_at))
            })
        } else {
            setFilteredQuestions({
                ...filteredQuestions,
                topic: topic,
                list: [...questions].sort((a,b) => b.created_at.localeCompare(a.created_at))
            })
        }
        
    };
    const onButtonClick = (e) => {
        const list = {
            'Likes': [...questions].sort((a,b) => b.votes.length - a.votes.length),
            'Unanswered': [...questions].filter(question => question.answers.length === 0)
                                        .sort((a,b) => b.created_at.localeCompare(a.created_at))
        }
        setFilteredQuestions({
            ...filteredQuestions,
            list:list[e.target.innerText]
        })
    }
    const handleQuestionsFetch = () => {
        if (loading) {
            return (
                <div className="flex justify-center">
                    <div className="loader"></div>
                </div>
            )
        } else if(questions.length !== 0) {
            //const sortedQuestions = [...questions].sort((a,b) => b.created_at.localeCompare(a.created_at))
            const {list} = filteredQuestions;
            return list.map(question => (
                <PostCard key={question.id} post={question} body={question.body.substring(0, 50) + ' ...'}
                    currentUser={currentUser} deleteQuestion={deleteQuestion}
                />
                ))
        } else {
            return <div>Nothing to display</div>
        }
    }
    return (
        <section className='posts-list mb-8'>
            <h1 className="font-bold text-2xl mb-3">All Questions</h1>
            <FilterQuestions 
                topic={filteredQuestions.topic} 
                onSelectChange={onSelectChange} 
                onButtonClick={onButtonClick}
            />
            {handleQuestionsFetch()}
        </section>
    );
}

export default QuestionsList;
