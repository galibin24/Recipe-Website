import { types } from "../../actions/types";

const initialState = {};

export const RecipePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_RECIPE:
			return Object.assign({}, state, {
				recipes: {...state.recipe, action.payload]},
			});
		case types.DELETE_RECIPE:
			return Object.assign({}, state, {
				recipes: state.recipes.filter(
					(recipes) => recipes.id !== action.payload
				),
			});
		default:
			return state;
	}
};
