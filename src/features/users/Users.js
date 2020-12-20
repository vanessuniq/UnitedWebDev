import React from 'react'
import { Link } from 'react-router-dom'

export default function Users({users}) {
    const renderusers = () => {
        return users.map(user => {
            return (
                <Link key={user.id} to={`/profile/${user.username}`}>
                    <div className="user-profile m-4" 
                        style={{backgroundImage: `url(${user.avatar})`}}>
                        <h3 className="font-bold bg-black text-white tracking-widest uppercase m-0 text-lg">
                            {user.username}
                        </h3>
                        <p className="font-bold leading-snug bg-black text-white tracking-wide mt-5 ml-0 mb-8">{user.bio}</p>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3 text-center">Users</h1>
            <div className="md:flex flex-wrap md:-mx-3 justify-center items-center mb-4">
                {renderusers()}
            </div>
            
        </div>
    )
}
