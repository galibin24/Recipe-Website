import { types } from "../../actions/types";

const initialState = {
	recipes: [],
};

export const listPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.RECIEVE_RECIPES:
			console.log(action.payload);
			return Object.assign({}, state, action.payload);
		case types.ADD_RECIPE:
			return Object.assign({}, state, {
				recipes: [...action.payload],
			});
		case types.DELETE_RECIPE:
			return Object.assign({}, state, {
				recipes: [...action.payload],
			});
		default:
			return state;
	}
};
