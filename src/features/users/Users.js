import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { error } from '../../helpers/notifications';

export default function Users({users}) {
    // set state to control user search 
    const [searchValue, setsearchValue] = useState('');
    const [filteredUsers, setfilteredUsers] = useState(users) //maybe empty on page reload due to the pending promise

    // on search submit, filter user list by submited username and clear searchbar 
    const filterUsers = (e) => {
        e.preventDefault();
        const filter = users.filter(user => user.username.startsWith(searchValue.toLowerCase()));
        if(filter.length !== 0){
            setfilteredUsers(filter); //set the filter result as the list to be rendered if any
        } else {
            error('User not found')
        }
        
        setsearchValue('')

    }
    const renderusers = () => {
        const list = filteredUsers.length === 0? users : filteredUsers; //accomodation for when the promise resolved
        return list.map(user => {
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
            <div className="md:flex justify-evenly border-b-2">
                <h1 className="font-bold text-2xl mb-3 text-center">Users</h1>
                <form className='mb-3' onSubmit={filterUsers}>
                    <input type="search" name="username" 
                    placeholder="Search by name..."
                    className="bg-purple-white shadow rounded border-0 p-3 text-dark"
                    value={searchValue}
                    onChange={(e) => setsearchValue( e.target.value)}/>
                </form>
                
                    
            </div>
            <div className="md:flex flex-wrap md:-mx-3 justify-center items-center mb-4">
                {renderusers()}
            </div>
            
        </div>
    )
}
