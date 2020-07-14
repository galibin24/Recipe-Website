import { types } from "./types";
import { addRecipeFromApi } from "../LocalStorage";
export const addRecipe = (recipeNoID) => async (dispatch) => {
	await addRecipeFromApi(recipeNoID).then((recipes) => {
		dispatch({
			type: types.ADD_RECIPE,
			payload: recipes,
		});
	});
};
