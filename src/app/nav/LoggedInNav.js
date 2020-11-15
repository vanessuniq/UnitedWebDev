import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function LoggedInNav({currentUser, logoutUser}) {
    return (
        <Fragment>
            <li className="nav-item">
                <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/"
                onClick={logoutUser}
                >
                    <span className="ml-2">Logout</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/"
                >
                    <FontAwesomeIcon icon={faUser}/>
                    <span className="ml-2">Hello {currentUser.username}</span>
                </Link>
            </li>
        </Fragment>
    )
}
