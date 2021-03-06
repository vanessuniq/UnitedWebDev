import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DefaultNav({closeMenu}) {
    return (
        <Fragment>
            <li className="nav-item">
                <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/login"
                onClick={closeMenu}
                >
                    <span className="ml-2">Login</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/registration"
                onClick={closeMenu}
                >
                    <span className="ml-2">Sign up</span>
                </Link>
            </li>
        </Fragment>
    )
}
