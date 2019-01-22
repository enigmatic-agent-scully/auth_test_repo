import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Navbar from '../layout/Navbar';

class Dashboard extends Component {
  componentDidCatch() {
    console.log(this.props);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <Router>
        <div className='dashboad-page-container'>
          <Navbar />
          <div style={{ height: '75vh' }} className='container valign-wrapper'>
            <div className='row'>
              <div className='col s12 center-align'>
                <h4>
                  <b>Hey there,</b> {user.name.split(' ')[0]}
                  <p className='flow-text grey-text text-darken-1'>
                    You are logged into a full-stack{' '}
                    <span style={{ fontFamily: 'monospace' }}>MERN</span> app 👏
                  </p>
                </h4>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                  }}
                  onClick={this.onLogoutClick}
                  className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard)
);
