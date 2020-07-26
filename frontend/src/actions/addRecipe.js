import axios from "axios";
import { types } from "./types";
import { getImage } from "../Unsplash";
export const addRecipe = (recipeNoID) => async (dispatch) => {
	const image = await getImage(recipeNoID.Title);
	console.log(image);
	axios({
		method: "post",
		url: `${process.env.REACT_APP_RECIPE_API}/api/recipes/`,
		data: {
			Title: recipeNoID.Title,
			Description: recipeNoID.Description,
			imageUrl: image,
		},
	}).then((response) => {
		dispatch({
			type: types.ADD_RECIPE,
			payload: response.data,
		});
	});
};
