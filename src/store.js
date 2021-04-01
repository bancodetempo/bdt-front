import { createStore } from 'redux';

const InitialState = {
  currentPage: '/'
};

const cart = (state = InitialState, action) => {
  switch (action.type) {
  case 'SET_CURRENT_PAGE':
    return { ...state, currentPage: action.payload };

  default:
    return state;
  }
};

const store = createStore(cart);
export default store;
