import React, { Component } from 'react';
import { success } from '../../helpers/notifications';
import QuestionForm from './QuestionForm';

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
            this.closeForm()
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
        <section className={`question-form ${this.props.visible && 'visible'}`}>
            <QuestionForm title={title} body={body} topic={topic} topicOptions={topicOptions}
                canSave={canSave} closeForm={this.closeForm} postErrors={this.props.postErrors}
                handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}
            />
        </section>
    )
    }
}

export default AddQuestion;