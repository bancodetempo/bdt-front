const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const Endpoints = {
  orders: backendUrl + '/api/v0/orders/',
  users: backendUrl + '/api/v0/users/?search='
};
