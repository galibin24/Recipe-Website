import { types } from "./types";
import axios from "axios";

export const recieveRecipes = () => async (dispatch) => {
	await axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/recipes/",
	}).then((recipes) => {
		recipes = recipes.data;
		dispatch({
			type: types.RECIEVE_RECIPES,
			payload: recipes,
		});
	});
};
