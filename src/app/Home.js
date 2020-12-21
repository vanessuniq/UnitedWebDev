import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{backgroundImage: `url("https://image.freepik.com/free-vector/blue-abstract-technology-background_52683-12538.jpg")`}}
            className="bg-fixed bg-center bg-cover min-h-screen m-0 text-center 
            grid place-content-center font-bold text-white">
            <h1 className='text-3xl md:text-6xl'>
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
                    <Link to='/questions'>Browse questions</Link>
            </button>
            </div>
            
        </div>
    )
}
