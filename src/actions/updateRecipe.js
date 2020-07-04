import { types } from "./types";
import { updateRecipeFromApi } from "../LocalStorage";

export const updateRecipe = (newRecipe) => async (dispatch) => {
	console.log("UPDATE");
	await updateRecipeFromApi(newRecipe).then((recipes) => {
		dispatch({
			type: types.UPDATE_RECIPE,
			payload: recipes,
		});
	});
};
