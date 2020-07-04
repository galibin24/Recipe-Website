import { types } from "./types";
import { getRecipefromApi } from "../LocalStorage";

export const getRecipe = (id) => {
	console.log("GET");
	console.log(id);
	let recipe = getRecipefromApi(id);
	return {
		type: types.GET_RECIPE,
		payload: recipe,
	};
};
