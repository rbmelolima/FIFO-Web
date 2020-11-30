import axios from 'axios';

export const baseUrl = 'https://fifo-server.herokuapp.com/';

const instanceAPI = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  timeoutErrorMessage: 'Timeout',
});

export default instanceAPI;