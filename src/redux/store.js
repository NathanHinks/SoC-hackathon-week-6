import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducer';

const store = configureStore(
  { reducer: gameReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for redux dev tools
);

export default store;
