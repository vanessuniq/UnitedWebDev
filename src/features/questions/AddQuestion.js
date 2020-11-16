import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import RenderErrors from '../../helpers/RenderErrors';

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            topic: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.topics = ['Rails', 'HTML', 'CSS', 'JS']
    }
    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
            
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postQuestion({question: {...this.state, user_id: this.props.currentUser.id}})
    }
     
    render() {
        const {title, body, topic} = this.state
        const canSave = [title, body, topic].every(Boolean)
        const topicOptions = this.topics.map((topic) => (
        <option key={topic} value={topic}>
        {topic}
        </option>
    ))
    return (
        <form className='bg-transparent relative shadow-md max-w-sm rounded px-8 pt-6 pb-8 mb-4' onSubmit={this.handleSubmit}>
            <h2 className='text-xl text-indigo-500 mb-2 text-center'>New Question</h2>
            {/**<RenderErrors errors={this.props.postErrors}/> **/}
            <button className="absolute top-0 right-0 h-8 w-8 bg-gray-700"><FontAwesomeIcon icon={faTimes}/></button>
            <label htmlFor="title" className='text-gray-700 ml-10'>Title: </label>
            <input className='form-input mt-1 ml-10 block w-3/4'
                type="text"
                name="title"
                placeholder="What's on your mind?"
                value={title}
                onChange={this.handleInputChange}
            />
            <small className="ml-10 text-red-500 italic block">*required</small>
            <label htmlFor="topic" className='text-gray-700 ml-10'>Topic :</label>
            <select name="topic" value={topic} className='form-select mt-1 ml-10 block w-3/4' onChange={this.handleInputChange}>
                <option value=""></option>
                {topicOptions}
            </select>
            <small className="ml-10 text-red-500 italic block">*required</small>
            <label htmlFor="body" className='text-gray-700 ml-10'>Content:</label>
            <textarea rows='3' className='form-textarea mt-1 ml-10 block w-3/4'
                name="body"
                value={body}
                onChange={this.handleInputChange}
            />
            <small className="ml-10 text-red-500 italic block">*required</small>
            <button type="submit" disabled={!canSave}
                className={`button focus:shadow-outline mt-4 ml-20 focus:outline-none ${canSave? 'hover:bg-green-400': ''}`}
            >
                Post Question
            </button>
        </form>
    
    )
    }
}

export default AddQuestion;