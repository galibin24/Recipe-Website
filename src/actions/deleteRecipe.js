import { types } from "./types";
import { deleteRecipeFromApi } from "../LocalStorage";
export const deleteRecipe = (id) => {
	const recipes = deleteRecipeFromApi(id);
	return {
		type: types.DELETE_RECIPE,
		payload: recipes,
	};
};
