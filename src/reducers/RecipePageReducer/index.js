import { types } from "../../actions/types";

export const recipePageReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_RECIPE:
			return Object.assign({}, action.payload);
		case types.UPDATE_RECIPE:
			return Object.assign(
				{},
				action.payload.find((state) => state.id === action.payload.id)
			);
		default:
			return state;
	}
};
