import { types } from "./types";
import { v4 } from "uuid";
export const addRecipe = (recipeNoID) => {
	const recipe = Object.assign({}, recipeNoID, { id: v4() });
	return {
		type: types.ADD_RECIPE,
		payload: recipe,
	};
};
