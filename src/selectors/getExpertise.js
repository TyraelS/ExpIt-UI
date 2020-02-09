import { Map } from 'immutable';

const getExpertise = state => state.get('expertise', Map()).toJS();

export default getExpertise;
