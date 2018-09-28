const initialState = {
	windowHeight: 500,
	windowWidth: 500,
	scrollTop: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case 'WINDOW_RESIZE':
		return {
			...state,
			windowWidth: action.width,
			windowHeight: action.height,
		};

	case 'WINDOW_SCROLL':
		return {
			...state,
			scrollTop: action.scrollTop,
		};

	default:
		return state;
	}
};

export default reducer;
