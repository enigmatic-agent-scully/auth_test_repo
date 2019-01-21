import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

//register
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData).then((res, err) => {
    if (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.res.data
      });
    } else {
      history.push('/login');
    }
  }); //redirect to login on successful register
};

export const loginUser = userData => dispatch => {
  axios
    .post('api/users/login', userData)
    .then(res => {
      //save token to local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // set token to Auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//setting the current user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const logoutUser = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem('jwtToken');
  //remove Auth header for future requests
  setAuthToken(false);
  //set current user to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
