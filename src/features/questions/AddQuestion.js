import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { success } from '../../helpers/notifications';
import QuestionForm from './QuestionForm';
import { history } from '../../helpers/history';

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {
                title: '',
                body: '',
                topic: ''
            },
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.topics = ['Rails', 'HTML', 'CSS', 'JS']
    }
    // close and clear form after submit
    closeForm = () =>{
        this.props.toggleQuestionForm()
        this.setState({...this.state, question: {title: '', body: '', topic: ''}})    
    }
    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            question: {
                ...this.state.question,
                [event.target.name]: event.target.value
            }     
        })
    }
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.postQuestion({question: {...this.state.question, user_id: this.props.currentUser.id}})
        
        if (this.props.postErrors.length === 0) {
            success('Your question has been posted')
            this.closeForm();
            history.push('/questions')
        }    
    }
     
    render() {
        const {title, body, topic} = this.state.question
        const canSave = [title, body, topic].every(Boolean)
        const topicOptions = this.topics.map((topic) => (
        <option key={topic} value={topic}>
        {topic}
        </option>
    ))
    
    return (
        <section className={`question-form relative ${this.props.visible && 'visible'}`}>
            <button className="absolute top-0 right-0 h-8 w-8 bg-gray-700" type='button' onClick={this.closeForm }>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
            <QuestionForm title={title} body={body} topic={topic} topicOptions={topicOptions}
                canSave={canSave} closeForm={this.closeForm} postErrors={this.props.postErrors}
                handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} formType='New Question'
            />
        </section>
    )
    }
}

export default AddQuestion;