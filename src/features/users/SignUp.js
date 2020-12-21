import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RenderErrors from '../../helpers/RenderErrors';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                avatar: '',
                bio: ''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
      
    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
            
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            submitted: true
        })
        await this.props.register({user: this.state.user})
        if (this.props.authErrors.length === 0) {
            this.props.history.push('/')
        }
    }
    render() {
        const {user} = this.state
        const canSave = [user.username, user.password].every(Boolean)
        return (
            <div className="bg-grey-lighter w-full flex flex-col items-center justify-center h-screen">
                    <div className="mt-40">
                        <h1 className="mt-16 text-3xl text-center text-indigo-600">United Web Dev</h1>
                        <h3 className="mb-4 text-2xl text-center">Welcome proactive learner, please sign up below</h3>
                    </div>
                <form className="bg-white md:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-8" onSubmit={this.handleSubmit}>
                    {this.state.submitted && <RenderErrors errors={this.props.authErrors}/>}
                    <div className="mt-4">
                        <label htmlFor="username" className="block">
                            <span className="text-gray-700">Username</span>
                            <input type="text" name="username"
                                aria-required="true"
                                className='form-input mt-1 block w-full'
                                value={user.username}
                                onChange={this.handleInputChange}
                            />
                            {!canSave? <small className="font-medium tracking-wide text-red-500">Username is required</small>: null}
                            
                        </label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block">
                            <span className="text-gray-700">Password</span>
                            <input type="password" name="password" 
                                className="form-input mt-1 block w-full "
                                aria-required="true" value={user.password}
                                onChange={this.handleInputChange}
                            />
                            {!canSave? <small className="font-medium tracking-wide text-red-500">Password is required</small>: null}
                            
                        </label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="avatar" className="block">
                            <span className="text-gray-700">Avatar</span>
                            <input type="url" name="avatar"
                                className="form-input mt-1 block w-full"
                                value={user.avatar}
                                onChange={this.handleInputChange}
                            />
                            <small className="text-black-600">Enter avatar/image link</small>
                        </label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="bio" className="block">
                            <span className="text-gray-700">Bio</span>
                            <textarea name="bio" rows="3"
                                className="form-textarea mt-1 block w-full"
                                value={user.bio}
                                onChange={this.handleInputChange}
                            >
                            </textarea>
                            <small className="text-black-600">Enter your Bio</small>
                        </label>
                    </div>
                        
                    <div className="mt-4">
                       <button type="submit" 
                            className={`button focus:shadow-outline focus:outline-none ${canSave? 'hover:bg-green-400': ''}`}
                            disabled={!canSave}
                        >
                            Sign Up
                        </button>
                        <Link to='/' 
                            className="text-pink-500 hover:text-red-600 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none"
                        >Cancel</Link>
                    </div>
                </form>
                <div className="mb-16 text-gray-dark">
                    Already have an account?
                    <Link to="/login" className="no-underline border-b border-blue text-blue-600"> Log in</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);