import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Node, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return auth.isAuthenticated ? (
          <Node {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(PrivateRoute);
