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
import { fetchDeleteQuestion, fetchQuestions, fetchUpdateQuestion, postQuestion } from './actions/questionActions';
import SingleQuestionPage from './features/questions/SingleQuestionPage';
import SignUp from './features/users/SignUp';
import { register, login, getProfile, logoutUser } from './actions/userActions';
import Login from './features/users/Login';
import { Alert, success } from './helpers/notifications';
import EditQuestion from './features/questions/EditQuestion';
import { fetchDeleteAnswer, postAnswer } from './actions/answerActions';
import Profile from './features/users/Profile';
import Users from './features/users/Users';
import Home from './app/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   
  componentDidMount() {
    this.props.fetchQuestions()
    this.props.getProfile()
  }
  logout = () => {
    localStorage.removeItem('token')
    this.props.logoutUser()
    success('Thanks for visiting, successfully logged out!')
  }
  render() {
   
    return (
      <div>
        <Router>
          <Header currentUser={this.props.currentUser} logoutUser={this.logout}
            postQuestion={this.props.postQuestion} postErrors={this.props.questionError}
          />
          <div className="p-3">
            <Switch>
              <Route exact path='/'>
                {this.props.currentUser.username?
                  <QuestionsList loading={this.props.loading} questions={this.props.questions} 
                  currentUser={this.props.currentUser}  deleteQuestion={this.props.fetchDeleteQuestion}
                  /> :
                  <Home/>
                }
              </Route> 
              <Route exact path='/questions'>
                <QuestionsList loading={this.props.loading} questions={this.props.questions} 
                currentUser={this.props.currentUser}  deleteQuestion={this.props.fetchDeleteQuestion}
                />
              </Route>
              <Route exact path='/questions/:questionId'>
                <SingleQuestionPage questions={this.props.questions} currentUser={this.props.currentUser}
                   deleteQuestion={this.props.fetchDeleteQuestion} postErrors= {this.props.questionError}
                   postAnswer={this.props.postAnswer} deleteAnswer={this.props.fetchDeleteAnswer}
                />
              </Route>
              <Route exact path='/registration'>
                <SignUp register={this.props.register} authErrors={this.props.authErrors}/>
              </Route>
              <Route exact path='/login'>
                <Login login={this.props.login} authErrors={this.props.authErrors}/>
              </Route>
              <Route exact path='/editQuestion/:questionId'>
                <EditQuestion questions={this.props.questions} fetchUpdateQuestion={this.props.fetchUpdateQuestion}
                   postErrors={this.props.questionError}/>
              </Route>
              <Route exact path='/users'>
                <Users users={this.props.users}/>
              </Route>
              <Route exact path='/profile/:username'>
                <Profile users={this.props.users}/>
              </Route>
            </Switch>
          </div>
          <Alert stack={ { limit: 3 } }/>
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
    questionError: state.questions.error,
    authErrors: state.users.errors,
    currentUser: state.users.currentUser,
    users: state.users.all,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  postQuestion: (questionInfo) => dispatch(postQuestion(questionInfo)) ,
  fetchUpdateQuestion: (questionInfo) => dispatch(fetchUpdateQuestion(questionInfo)),
  fetchDeleteQuestion: (questionId) => dispatch(fetchDeleteQuestion(questionId)),
  postAnswer: (answerInfo) => dispatch(postAnswer(answerInfo)) ,
  fetchDeleteAnswer: (answerId) => dispatch(fetchDeleteAnswer(answerId)),
  register: userInfo => dispatch(register(userInfo)),
  login: userInfo => dispatch(login(userInfo)),
  getProfile: () => dispatch(getProfile()),
  logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)