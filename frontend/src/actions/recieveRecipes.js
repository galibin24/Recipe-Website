import { types } from "./types";
import axios from "axios";

export const recieveRecipes = () => async (dispatch) => {
	await axios({
		method: "get",
		url: `${process.env.REACT_APP_RECIPE_API}/api/recipes/`,
	}).then((response) => {
		const recipes = response.data;
		dispatch({
			type: types.RECIEVE_RECIPES,
			payload: recipes,
		});
	});
};
