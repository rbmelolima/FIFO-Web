import axios from 'axios';

const instanceAPI = axios.create({
  baseURL: 'https://fifo-server.herokuapp.com/',
  timeout: 5000,
  timeoutErrorMessage: 'Timeout',
});

export default instanceAPI;