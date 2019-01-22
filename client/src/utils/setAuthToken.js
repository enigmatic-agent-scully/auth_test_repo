import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //if logged in, configures axios to apply auth token
    //to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //if not logged in, removes header configuration
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
