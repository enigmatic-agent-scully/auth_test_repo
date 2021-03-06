import React, { Component } from 'react';
import Navbar from './Navbar';

class Landing extends Component {
  render() {
    return (
      <div className='landing-page-container'>
        <Navbar />
        <div style={{ height: '75vh' }} className='container valign-wrapper'>
          <div className='row'>
            <div
              className='col s12 center-align'
              style={{ padding: '0 .75rem 0 18rem' }}
            >
              <a
                href='/register'
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px'
                }}
                className='btn btn-large waves-effect waves-light hoverable blue accent-3'
              >
                Register
              </a>
              <a
                href='/login'
                style={{
                  marginLeft: '2rem',
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px'
                }}
                className='btn btn-large waves-effect white hoverable black-text'
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
