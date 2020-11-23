import React from 'react'
import RenderErrors from '../../helpers/RenderErrors'

export default function QuestionForm({title, body, topic, topicOptions, formType, canSave, postErrors, handleSubmit, handleInputChange}) {
    return (
        <form className='bg-white shadow-md max-w-xl rounded px-8 pt-6 pb-8 mb-4 '
             onSubmit={handleSubmit}
        >
            <h2 className='text-xl text-indigo-500 mb-2 text-center'>{formType}</h2>
            <RenderErrors errors={postErrors}/> 
            
            <label htmlFor="title" className='text-gray-700 ml-10'>Title: </label>
            <input className='form-input mt-1 ml-10 block w-3/4'
                type="text"
                name="title"
                placeholder="What's on your mind?"
                value={title}
                onChange={handleInputChange}
            />
            <small className="ml-10 text-red-500 italic block">*required</small>
            <label htmlFor="topic" className='text-gray-700 ml-10'>Topic :</label>
            <select name="topic" value={topic} className='form-select mt-1 ml-10 block w-3/4' onChange={handleInputChange}>
                <option value=""></option>
                {topicOptions}
            </select>
            <small className="ml-10 text-red-500 italic block">*required</small>
            <label htmlFor="body" className='text-gray-700 ml-10'>Content:</label>
            <textarea rows='3' className='form-textarea mt-1 ml-10 block w-3/4'
                name="body"
                value={body}
                onChange={handleInputChange}
            />
            <small className="ml-10 text-red-500 italic block">*required</small>
            <button type="submit" disabled={!canSave}
                className={`button focus:shadow-outline mt-4 ml-10 focus:outline-none ${canSave? 'hover:bg-green-400': ''}`}
            >
                Post Question
            </button>
        </form>
    )
}
