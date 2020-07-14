import axios from "axios";
import { types } from "./types";

export const addRecipe = (recipeNoID) => async (dispatch) => {
	await axios({
		method: "post",
		url: "http://127.0.0.1:8000/api/recipes/",
		data: {
			Title: recipeNoID.Title,
			Description: recipeNoID.Description,
		},
	}).then((recipe) => {
		// recipe = JSON.parse(recipe).data;
		console.log(recipe.data);
		dispatch({
			type: types.ADD_RECIPE,
			payload: recipe.data,
		});
	});
};
