import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Footer from './app/Footer';
import Header from './app/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <div className="p-3">
            <Switch>
              <Route exact path='/'>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </Router>
        
      </div>
    );
  }
}

export default App;