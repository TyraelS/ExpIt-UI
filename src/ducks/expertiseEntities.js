import { List, fromJS } from 'immutable';

export const FETCH_EXPERTISES = 'FETCH_EXPERTISES';
export const CLEAR_EXPERTISES = 'CLEAR_EXPERTISES';

export const defaultState = List();

export const fetchExpertises = data => ({
	type: FETCH_EXPERTISES,
	payload: data
});

export const expertiseEntities = (state = defaultState, action = {}) => {
	switch (action.type) {
		case FETCH_EXPERTISES:
			return fromJS(action.payload);
		case CLEAR_EXPERTISES:
			return state.clear();
		default:
			return state;
	}
};
