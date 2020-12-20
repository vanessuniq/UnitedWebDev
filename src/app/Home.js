import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyS274UtI_bI6eQL4_B3WFvO9LW4DhQez7-Q&usqp=CAU")`}}
            className="bg-fixed bg-center bg-cover min-h-screen m-0 text-center 
            grid place-content-center text-white">
            <h1 className='text-3xl font-bold md:text-6xl'>
                We <FontAwesomeIcon icon={faHeart} className="text-red-500"/> developers of all levels
            </h1>
            <p className="font-mono mt-4 tracking-wide">
                This is the platform allowing developers to collaborate and find solutions to their toughest questions.
                Built with <i className="text-red-400">love</i> to enhence your productivity, knowledge, and growth; and 
                diversify your thinking processes.
            </p>
            <div className="mt-8">
            <button className="bg-red-600 py-2 px-4 border-b-4 border-red-800 rounded text-white
                hover:border-red-lighter hover:bg-red-400">
                    <Link to='/'>Browse questions</Link>
            </button>
            </div>
            
        </div>
    )
}
