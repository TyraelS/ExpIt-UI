import { List } from 'immutable';

const getExpertises = state => state.get('expertiseEntities', List()).toJS();

export default getExpertises;
