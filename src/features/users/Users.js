import React from 'react'

export default function Users({users}) {
    const renderusers = () => {
        users.map(user => (
            <div>
                <div 
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
                    style={{backgroundImage: `url(${user.avatar})`}} 
                    title="profile picture">
                </div>
            </div>
        ))
    }
    return (
        <div>
            <h1>Users</h1>
            {renderusers()}
        </div>
    )
}
