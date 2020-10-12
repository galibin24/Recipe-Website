import React, { useState } from "react";
import RecipeForm from "../recipeForm";

const UpdateRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => setShow(false);
	return (
		<div>
			<button className="btn btn-warning recipeUpdateButton" onClick={Show}>
				Change Recipe
			</button>
			{show && <RecipeForm Close={Close} show={show} recipe={props.recipe} />}
		</div>
	);
};

export default UpdateRecipe;
