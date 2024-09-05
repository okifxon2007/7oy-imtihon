import axios from 'axios';

const http = axios.create({
  baseURL: 'https://frontend-mentor-apis-6efy.onrender.com',
  timeout: 5000,
});

// Request Interceptor
http.interceptors.request.use(
  (config) => {
    // So'rov oldidan biror o'zgarish yoki token qo'shish
    config.headers['Authorization'] = 'Bearer your-token-here';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
