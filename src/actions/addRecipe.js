import axios from "axios";
import { types } from "./types";
import { getImage } from "../Unsplash";
export const addRecipe = (recipeNoID) => async (dispatch) => {
	const image = await getImage(recipeNoID.Title);
	// console.log(image);
	axios({
		method: "post",
		url: `${process.env.REACT_APP_RECIPE_API}/api/recipes/`,
		data: {
			Title: recipeNoID.Title,
			Description: recipeNoID.Description,
			imageUrl: image,
			recipe_type: recipeNoID.recipe_type,
			preperation_minutes: recipeNoID.preperation_minutes,
		},
		headers: {
			authorization: `Bearer ${localStorage.getItem("access")}`,
		},
	}).then((response) => {
		console.log(response);
		dispatch({
			type: types.ADD_RECIPE,
			payload: response.data,
		});
	});
};
