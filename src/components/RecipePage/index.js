import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../actions/getRecipe";
import DeleteRecipe from "./confirmation";
import UpdateRecipe from "./updateRecipe";
import throttle from "lodash/throttle";
import "./style.scss";

const RecipePage = (props) => {
	const dispatch = useDispatch();
	const recipeID = props.match.params.id;

	const getRecipeState = dispatch(getRecipe(recipeID));
	const recipe = getRecipeState.payload;
	// const recipe = useSelector((state) => state.recipePageReducer);
	const Title = recipe.Title;
	const Description = recipe.Description;
	const imageUrl = recipe.imageUrl;
	return (
		<div>
			<div>{imageUrl && <img src={imageUrl} alt="food"></img>}</div>

			<h1 className="title">{Title}</h1>
			<p>{Description}</p>

			<DeleteRecipe recipeID={recipeID} />
			<UpdateRecipe recipe={recipe} />
		</div>
	);
};

export default RecipePage;
