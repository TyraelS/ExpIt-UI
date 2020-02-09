import { Map, fromJS } from 'immutable';

export const FETCH_SEV = 'FETCH_SEV';
export const CLEAR_SEV = 'CLEAR_SEV';

export const defaultState = Map();

export const fetchSev = data => ({
	type: FETCH_SEV,
	payload: data
});

export const expertise = (state = defaultState, action = {}) => {
	switch (action.type) {
		case FETCH_SEV:
			return fromJS(action.payload);
		case CLEAR_SEV:
			return state.clear();
		default:
			return state;
	}
};
