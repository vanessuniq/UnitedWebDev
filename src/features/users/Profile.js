import React from 'react'

export default function Profile({user}) {
    //Design inspired by this dribbble: https://dribbble.com/shots/2316219-User-profile
    console.log(user)
    return (
        <div 
            className="flex justify-evenly relative bg-gradient-to-r md:bg-gradient-to-l from-orange-100 via-red-300 to-pink-100 ">
            <div className="flex flex-col items-center">
                <div className="user-profile" 
                    style={{backgroundImage: `url(${user.avatar})`}}>
                    <h3 className="font-bold text-black tracking-widest uppercase m-0 text-lg">
                        {user.username}
                    </h3>
                    <p className="font-bold leading-snug text-purple tracking-wide mt-5 ml-0 mb-8">{user.bio}</p>
                </div>
                <ul className="user-info">
                    <li>
                        <h3>{user.questions.length}</h3>
                        <small>{user.questions.length > 1? "questions": "question"}</small>
                    </li>
                    <li>
                        <h3>{user.answers.length}</h3>
                        <small>{user.answers.length > 1? "answers" : "answer"}</small>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="font-bold tracking-widest text-lg text-green">
                    Posted Questions
                    <span className="text-gray-600">({user.questions.length})</span>
                </h2>
            </div>
           
        </div>
    )
}