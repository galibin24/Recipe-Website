import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../actions/getRecipe";
import DeleteRecipe from "./confirmation";
import UpdateRecipe from "./updateRecipe";
import { useParams } from "react-router-dom";
import "./style.scss";
import { setNestedObjectValues } from "formik";

const RecipePage = (props) => {
	const [price, setPrice] = useState(0);

	const dispatch = useDispatch();

	const { id: recipeID } = useParams();
	const getRecipeState = () => {
		dispatch(getRecipe(recipeID));
	};

	useEffect(getRecipeState, []);

	const recipe = useSelector((state) => state.recipePageReducer.recipe);

	const Title = recipe.Title;
	const Description = recipe.Description;
	const imageUrl = recipe.imageUrl;
	return (
		<div>
			{imageUrl && <img src={imageUrl} alt="food"></img>}

			<h1 className="title">{Title}</h1>
			<p>{Description}</p>
			<input onChange={(e) => setPrice(e.target.value)} />

			<DeleteRecipe recipeID={recipeID} />
			<UpdateRecipe recipe={recipe} />
		</div>
	);
};

export default RecipePage;
