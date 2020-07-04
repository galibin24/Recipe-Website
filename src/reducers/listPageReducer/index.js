import { types } from "../../actions/types";
import { loadRecipes } from "../../LocalStorage";

const initialState = {
	...loadRecipes(),
};

export const listPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_RECIPE:
			return Object.assign({}, state, {
				recipes: [...action.payload],
			});
		case types.DELETE_RECIPE:
			return Object.assign({}, state, {
				recipes: [...action.payload],
			});
		case types.UPDATE_RECIPE:
			return Object.assign({}, state, {
				recipes: [...action.payload],
			});
		default:
			return state;
	}
};
