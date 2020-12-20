import React from 'react'

export default function FilterQuestions({topic, onSelectChange, onButtonClick}) {
    const options = ['All topics','CSS', 'HTML', 'JS', 'Rails'].map((option, index )=> (
        <option key={index}>{option}</option>
    ))
    return (
        <div className="flex justify-evenly border-b-2 mb-4">
            <h2 className="text-gray-500 text-2xl mb-2">questions</h2>
            <div className="mb-2">
                <select name="topic" className="form-select text-purple-600 w-full"
                    value={topic} onChange={onSelectChange}>
                    {options}
                </select>
            </div>
            <div className="mb-3">
                <button className="reaction-button text-purple-600 hover:text-green-600"
                    onClick={onButtonClick}>
                    Likes
                </button>
                <button className="reaction-button text-purple-600 hover:text-green-600"
                    onClick={onButtonClick}>
                    Unanswered
                </button>
            </div>
        </div>
    )
}
