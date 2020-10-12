import { types } from "./types";
import axios from "axios";
import { getImage } from "../Unsplash";

export const updateRecipe = (newRecipe) => async (dispatch) => {
	const image = await getImage(newRecipe.Title);
	await axios({
		method: "put",
		url: `${process.env.REACT_APP_RECIPE_API}/api/recipes/${newRecipe.id}`,
		data: {
			Title: newRecipe.Title,
			Description: newRecipe.Description,
			imageUrl: image,
			recipe_type: newRecipe.recipe_type,
			preperation_minutes: newRecipe.preperation_minutes,
		},
		headers: {
			authorization: `Bearer ${localStorage.getItem("access")}`,
		},
	}).then((response) => {
		let recipe = response.data;
		dispatch({
			type: types.UPDATE_RECIPE,
			payload: recipe,
		});
	});
};
