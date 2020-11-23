import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { success } from '../../helpers/notifications';
import QuestionForm from './QuestionForm';
 
class EditQuestion extends Component {
    constructor(props) {
        super(props);
        this.questionId = this.props.match.params.questionId
        const question = this.props.questions.find(quest => quest.id === parseInt(this.questionId))
        this.state = {...question};
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
      handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.fetchUpdateQuestion({question: this.state})
        
        if (this.props.postErrors.length === 0) {
            success('Your question has been updated')
            this.props.history.push(`/questions/${this.questionId}`)
        }    
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
            <section>
                <QuestionForm title={title} body={body} topic={topic} topicOptions={topicOptions}
                    canSave={canSave} postErrors={this.props.postErrors}
                    handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}
                />
                
            </section>
        );
    }
}
 
export default withRouter(EditQuestion);