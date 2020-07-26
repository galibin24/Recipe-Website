import { types } from "./types";
import axios from "axios";

export const getRecipe = (id) => async (dispatch) => {
	const link = `${process.env.REACT_APP_RECIPE_API}/api/recipes/${id}`;
	await axios({
		method: "get",
		url: link,
	}).then((response) => {
		const recipe = response.data;
		dispatch({
			type: types.GET_RECIPE,
			payload: recipe,
		});
	});
};
