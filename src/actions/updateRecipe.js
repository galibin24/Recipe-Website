import { types } from "./types";
import axios from "axios";

export const updateRecipe = (newRecipe) => async (dispatch) => {
	await axios({
		method: "post",
		url: "http://127.0.0.1:8000/api/recipes/",
		data: {
			Title: newRecipe.Title,
			Description: newRecipe.Description,
		},
	}).then((recipe) => {
		recipe = recipe.data;
		dispatch({
			type: types.UPDATE_RECIPE,
			payload: recipe,
		});
	});
};
