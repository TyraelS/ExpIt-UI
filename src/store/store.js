import { createStore } from 'redux';
import { Map } from 'immutable';

const store = createStore(
  state => state,
  Map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
