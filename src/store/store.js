import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import { expertiseEntities, expertise } from '../ducks';

const reducer = combineReducers({ expertiseEntities, expertise });

const store = createStore(
	reducer,
	Map(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
