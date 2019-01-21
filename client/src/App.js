import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route path='/' exact component={Landing} />
          <Route path='/register/' component={Register} />
          <Route path='/login/' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
