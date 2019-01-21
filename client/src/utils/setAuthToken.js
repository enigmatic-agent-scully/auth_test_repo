import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //if logged in, apply auth token to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
