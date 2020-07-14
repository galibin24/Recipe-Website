import { types } from "./types";
import axios from "axios";

export const deleteRecipe = (id) => async (dispatch) => {
	const link = "http://127.0.0.1:8000/api/recipes/" + id + "/";
	await axios({
		method: "delete",
		url: link,
	}).then((recipes) => {
		recipes = recipes.data;
		console.log(recipes);
		dispatch({
			type: types.DELETE_RECIPE,
			payload: recipes,
		});
	});
};
