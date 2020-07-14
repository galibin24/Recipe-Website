import React, { useEffect } from "react";
import { recieveRecipes } from "../../actions/recieveRecipes";
import RecipeItem from "./recipeItem";
import AddRecipe from "./addRecipe";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

const RecipeList = (props) => {
	const dispatch = useDispatch();

	const fetchRecipes = () => {
		dispatch(recieveRecipes());
	};

	useEffect(fetchRecipes, []);
	const recipeList = useSelector((state) => state.listPageReducer.recipes);
	console.log(recipeList);
	return (
		<div>
			<h1 className="recipeList">Recipe List</h1>
			{recipeList.length > 0 &&
				recipeList.map((recipe) => <RecipeItem {...recipe} key={recipe.id} />)}
			{recipeList.length === 0 && (
				<p className="addItem">
					Please, add a recipe by clicking the button below.
				</p>
			)}
			<AddRecipe />
		</div>
	);
};

export default RecipeList;
