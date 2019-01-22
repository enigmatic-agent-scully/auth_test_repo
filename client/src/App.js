import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Fragment>
          <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/dashboard' component={Dashboard} />} />
            </Switch>
          </Router>
        </Fragment>
      </div>
    );
  }
}

export default App;
