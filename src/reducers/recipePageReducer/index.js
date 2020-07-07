import { types } from "../../actions/types";

export const recipePageReducer = (state = { recipe: {} }, action) => {
	switch (action.type) {
		case types.GET_RECIPE:
			return Object.assign({}, state, { recipe: action.payload });
		case types.UPDATE_RECIPE:
			return Object.assign({}, state, { recipe: action.payload });
		default:
			return state;
	}
};
