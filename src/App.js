import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from './app/Footer';
import Header from './app/Header';
import QuestionsList from './features/questions/QuestionsList';
import { fetchQuestions } from './actions/questionActions';
import SingleQuestionPage from './features/questions/SingleQuestionPage';
import SignUp from './features/users/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   
  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    
    return (
      <div>
        <Router>
          <Header/>
          <div className="p-3">
            <Switch>
              <Route exact path='/'>
                <QuestionsList loading={this.props.loading} questions={this.props.questions} error={this.props.error}/>
              </Route>
              <Route exact path='/questions/:questionId'>
                <SingleQuestionPage questions={this.props.questions}/>
              </Route>
              <Route exact path='/registration'>
                <SignUp/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    loading: state.questions.loading,
    error: state.questions.error
  }
}
export default connect(mapStateToProps, { fetchQuestions })(App)