import { types } from "./types";

export const deleteRecipe = (id) => {
	return {
		type: types.DELETE_RECIPE,
		payload: id,
	};
};
