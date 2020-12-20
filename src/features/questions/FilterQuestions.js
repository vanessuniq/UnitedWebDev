import React from 'react'

export default function FilterQuestions() {
    const options = ['All topic','CSS', 'HTML', 'JS', 'Rails']
    return (
        <div className="flex justify-evenly border-b-2 mb-4">
            <h2 className="text-gray-500 text-2xl mb-2">questions</h2>
            <div className="mb-2">
                <select name="topic" value="">
                    {options}
                </select>
            </div>
            <div className="mb-3">
                <button className="reaction-button text-purple-600 hover:text-green-600">
                    Likes
                </button>
                <button className="reaction-button text-purple-600 hover:text-green-600">
                    Unanswered
                </button>
            </div>
        </div>
    )
}
