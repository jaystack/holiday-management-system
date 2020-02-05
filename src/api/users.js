import request from './axios';

const getUserData = jwtToken => request({
  url: '/users/me',
  method: 'GET',
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
});


export default getUserData;
