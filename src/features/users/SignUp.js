import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="username">
                            <span>Username</span>
                            <input type="text" name="username" placeholder="Enter Username" aria-required="true" value={'controlled by state'}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" placeholder="Enter Password" aria-required="true" value={'state'}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="avatar">
                            <span>Avatar</span>
                            <input type="url" name="avatar" placeholder="Enter Avatar/Image Link" value={'state'}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="bio">
                            <span>Bio</span>
                            <textarea name="bio" rows="10" placeholder="Enter Bio" value={'state'}></textarea>
                        </label>
                    </div>
                        <button type="submit">Sign Up</button>
                        <Link>Cancel</Link>
                    <div>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;