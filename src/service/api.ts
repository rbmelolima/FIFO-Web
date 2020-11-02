import Axios from "axios";

import axios from 'axios';

const instanceAPI = axios.create({
  baseURL: '',
  timeout: 5000,
  timeoutErrorMessage: 'Timeout',
});

export default instanceAPI;