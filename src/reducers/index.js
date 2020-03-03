import { SET_SEARCH, MAKE_REQUEST, RCPT_DATA } from '../actions';

const reducer = (state={loading: null}, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return {...state, searchString: action.str};
		case MAKE_REQUEST:
			return {...state, loading: true};
		case RCPT_DATA:
			return {...state, usefulData: action.json, loading: false};
		default:
			return state;
	}
};

export default reducer;
