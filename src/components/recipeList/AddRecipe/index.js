import React, { useState } from "react";
import "./style.scss";
import RecipeForm from "../../RecipeForm";

import Button from "react-bootstrap/Button";

const AddRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => setShow(false);

	return (
		<div>
			<Button variant="primary" onClick={Show}>
				Add New Recipe
			</Button>
			{show && <RecipeForm Close={Close} show={show} />}
		</div>
	);
};

export default AddRecipe;
