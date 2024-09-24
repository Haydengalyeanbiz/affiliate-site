const initialState = {
	links: [],
};

const linkReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LINKS':
			return {
				...state,
				links: action.payload,
			};
		default:
			return state;
	}
};

export default linkReducer;
