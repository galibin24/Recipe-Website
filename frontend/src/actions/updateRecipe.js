import { types } from "./types";
import axios from "axios";
import { getImage } from "../Unsplash";

export const updateRecipe = (newRecipe) => async (dispatch) => {
	const image = await getImage(newRecipe.Title);
	await axios({
		method: "post",
		url: `${process.env.REACT_APP_RECIPE_API}/api/recipes/`,
		data: {
			Title: newRecipe.Title,
			Description: newRecipe.Description,
			imageUrl: image,
		},
	}).then((response) => {
		let recipe = response.data;
		dispatch({
			type: types.UPDATE_RECIPE,
			payload: recipe,
		});
	});
};
