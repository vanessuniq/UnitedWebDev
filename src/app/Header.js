import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import LoggedInNav from './nav/LoggedInNav';
import DefaultNav from './nav/DefaultNav';

class Header extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggleNavMenu = this.toggleNavMenu.bind(this);
	}

	toggleNavMenu() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		
		return (
            <Fragment>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <Link
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                                to="/"
                            >
                                WEB DEV QA ENGINE
                            </Link>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Ask Question
                            </button>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={this.toggleNavMenu}
                            >
                                <FontAwesomeIcon 
                                    icon={faBars}
                                />
                            </button>
                        </div>
                        <div
                            className={
                            "lg:flex flex-grow items-center" +
                            (this.state.isOpen ? " flex" : " hidden")
                            }
                            
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/"
                                    >
                                        <span className="ml-2">Home</span>
                                    </Link>
                                </li>
                                {this.props.currentUser.username? 
                                    <LoggedInNav currentUser={this.props.currentUser} logoutUser={this.props.logoutUser}/> 
                                    : <DefaultNav/>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
		);
	}
}

export default Header;
