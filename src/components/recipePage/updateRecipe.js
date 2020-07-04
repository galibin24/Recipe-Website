import React, { useState } from "react";
import RecipeForm from "../recipeForm";
import Button from "react-bootstrap/Button";

const UpdateRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => setShow(false);
	return (
		<div>
			<Button className="button" onClick={Show}>
				Change Recipe
			</Button>
			{show && <RecipeForm Close={Close} show={show} recipe={props.recipe} />}
		</div>
	);
};

export default UpdateRecipe;
