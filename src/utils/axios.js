import axios from 'axios';

const http = axios.create({
  baseURL: 'https://frontend-mentor-apis-6efy.onrender.com',
  timeout: 5000,
});


http.interceptors.request.use(
  (config) => {
    
    config.headers['Authorization'] = 'Bearer your-token-here';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;


// constructor function
// function User = (name, age){
//   this.name = name
//   this.age = age
// }
// const user = new User('lola', 35);


// function createuser(name, age){
//   return{
//     name:name,
//     age:age
//   }
// }


// class Car{
//   constructor(name, age){
//     this.name = name,
//     this.age = age
//   }
// }