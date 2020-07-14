import { types } from "./types";
import axios from "axios";

export const getRecipe = (id) => async (dispatch) => {
	const link = "http://127.0.0.1:8000/api/recipes/" + id + "/";
	await axios({
		method: "get",
		url: link,
	}).then((recipe) => {
		recipe = recipe.data;
		dispatch({
			type: types.GET_RECIPE,
			payload: recipe,
		});
	});
};
