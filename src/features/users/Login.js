import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import RenderErrors from '../../helpers/RenderErrors';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        await this.props.login({user: this.state.user})
        if (this.props.authErrors.length === 0) {
            this.props.history.push('/')
        }
    }
    render() {
        const {user} = this.state
        const canSave = [user.username, user.password].every(Boolean)
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="mb-6 text-center text-xl text-blue-900">Welcome back! Login to gain access</h1>
            <div className='w-1/2'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={this.handleSubmit}>
                    {this.state.submitted && <RenderErrors errors={this.props.authErrors}/>}
                    <div className='mb-4'>
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                        <input type="text" name="username"
                            className="form-input mt-1 block w-full"
                            value={user.username}
                            onChange={this.handleInputChange}
                        />
                        <small className="text-red-500 italic">Please enter your username</small>
                    </div>
                
                    <div className='mb-6'>
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" name="password"
                            className="form-input mt-1 block w-full"
                            value={user.password}
                            onChange={this.handleInputChange}
                        />
                        <small className="text-red-500 italic">Please enter your password</small>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button type="submit"
                            className={`button focus:shadow-outline mr-6 focus:outline-none ${canSave? 'hover:bg-green-400': ''}`}
                            disabled={!canSave}
                        >
                            Log In
                        </button>
                        <Link to='/' 
                            className="inline-block align-baseline font-bold mr-6 text-m text-pink-500 hover:text-red-800"
                        >Cancel</Link>
                        <Link to='/' className="inline-block align-baseline font-bold text-m text-blue-500 hover:text-blue-800">
                            Forgot password?
                        </Link>
                    </div>
                </form>
                <p className="text-grey-dark text-sm text-center">
                    Don't have an account? 
                    <Link to='/registration' className="no-underline text-blue-500 hover:text-blue-800 font-bold"> Create an account</Link>
                </p>
            </div>
        </div>
    )
    }
}

export default withRouter(Login);