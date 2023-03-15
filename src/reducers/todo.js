const todoReducer = (state, action) => {
	switch (action.type) {
		case 'addItem':
			return [...state, action.title];
		case 'removeItem':
			return state.filter((_, idx) => idx !== action.payload);
		default:
			return new Error();
	}
};

export { todoReducer };
