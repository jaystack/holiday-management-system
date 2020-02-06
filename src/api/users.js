import request from './axios';

export const getUser = jwtToken => request({
  url: '/users/me',
  method: 'GET',
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
});

export const updateUser = (jwtToken, userData) => request({
  url: '/users/me',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${jwtToken}`
  },
  data: userData
});
