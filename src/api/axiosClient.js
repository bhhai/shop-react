import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com', //url api
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

export default axiosClient;
