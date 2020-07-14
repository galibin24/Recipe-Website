import { types } from "./types";
import { fetchRecipes } from "../LocalStorage";

export const recieveRecipes = () => {
	const recipes = fetchRecipes();
	console.log(recipes);
	return {
		type: types.RECIEVE_RECIPES,
		payload: recipes,
	};
};
