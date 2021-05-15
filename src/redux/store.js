import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducer';

const store = configureStore(
  { reducer: gameReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
