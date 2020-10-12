import React, { useState } from "react";
import "./style.scss";
import RecipeForm from "../../recipeForm";
import { useSelector } from "react-redux";
const AddRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => setShow(false);
	const isLoggedIn = useSelector((state) => state.authReducer.loggedIn);

	return (
		isLoggedIn && (
			<button className="col-lg-3 h4" onClick={Show}>
				Add My Recipe
				{show && <RecipeForm Close={Close} show={show} />}
			</button>
		)
		// {!isLoggedIn && <h4>Please Create an account to create recipes</h4>}
	);
};

export default AddRecipe;
