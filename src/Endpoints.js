const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const Endpoints = {
  orders: backendUrl + '/api/v1/transference/',
  users: backendUrl + '/api/v1/user/?search_field='
};
