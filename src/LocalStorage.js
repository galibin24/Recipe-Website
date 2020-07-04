import { v4 } from "uuid";
import { getImage } from "./Unsplash";

export const loadRecipes = () => {
	try {
		const serializedrecipes = localStorage.getItem("recipes");
		if (serializedrecipes === null) {
			return { recipes: [] };
		}
		return { recipes: JSON.parse(serializedrecipes) };
	} catch (err) {
		return undefined;
	}
};

export const addRecipeFromApi = async (recipeNoId) => {
	try {
		// get recepies
		const parsedRecipes = JSON.parse(localStorage.getItem("recipes"));
		let recipes;
		if (parsedRecipes === null) {
			recipes = await getImage(`${recipeNoId.Title} + dish`)
				.then((imageUrl) => {
					const recipe = Object.assign({}, recipeNoId, { id: v4(), imageUrl });
					return recipe;
				})
				.then((recipe) => {
					const recipes = [recipe];
					const serializedRecipes = JSON.stringify(recipes);
					localStorage.setItem("recipes", serializedRecipes);
					return recipes;
				});
		} else {
			recipes = await getImage(`${recipeNoId.Title} + dish`)
				.then((imageUrl) => {
					const recipe = Object.assign({}, recipeNoId, { id: v4(), imageUrl });
					return recipe;
				})
				.then((recipe) => {
					const recipes = [...parsedRecipes, recipe];
					const serializedrecipes = JSON.stringify(recipes);
					localStorage.setItem("recipes", serializedrecipes);
					return recipes;
				});
		}
		return recipes;
	} catch (err) {}
};

export const deleteRecipeFromApi = (id) => {
	try {
		const parsedRecipes = JSON.parse(localStorage.getItem("recipes"));
		const filteredRecipes = parsedRecipes.filter((recipe) => recipe.id !== id);

		const serializedrecipes = JSON.stringify(filteredRecipes);
		localStorage.setItem("recipes", serializedrecipes);

		return filteredRecipes;
	} catch (err) {}
};

export const getRecipefromApi = (id) => {
	try {
		const serializedrecipes = localStorage.getItem("recipes");
		const recipeList = JSON.parse(serializedrecipes);
		const recipe = recipeList.find((recipe) => recipe.id === id);
		return recipe;
	} catch (err) {}
};

export const updateRecipeFromApi = async (newRecipe) => {
	try {
		const parsedRecipe = JSON.parse(localStorage.getItem("recipes"));
		let recipes;
		await getImage(`${newRecipe.Title} + dish`)
			.then((imageUrl) => {
				const recipe = Object.assign({}, newRecipe, { imageUrl });
				return recipe;
			})
			.then((newRecipe) => {
				recipes = parsedRecipe.map((oldRecipe, index) => {
					if (oldRecipe.id === newRecipe.id) {
						return (parsedRecipe[index] = newRecipe);
					}
					return oldRecipe;
				});

				const serializedrecipes = JSON.stringify(recipes);
				localStorage.setItem("recipes", serializedrecipes);
				return recipes;
			});
		return recipes;
	} catch (err) {}
};
