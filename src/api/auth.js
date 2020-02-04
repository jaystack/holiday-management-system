import request from './axios';


const authenticate = (email, password) => request({
  url: '/auth/login',
  method: 'POST',
  data: {
    email,
    password
  }
});


export default authenticate;
