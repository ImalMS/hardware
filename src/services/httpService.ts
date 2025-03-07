import axios from 'axios';
import {store} from '../redux/Store';
//import { serverUrl } from '../config.json';

const UNAUTHORIZED = 401;
const axiosInstance = axios;

axiosInstance.defaults.headers.post = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'multipart/form-data',
};

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      const {status} = error.response;
    }
    return Promise.reject(error);
  },
);

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
