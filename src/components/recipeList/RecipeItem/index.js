import React from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions/deleteRecipe";
import { Link } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.scss";
const RecipeItem = (props) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteRecipe(id));
	};

	return (
		<Jumbotron>
			<h1>{props.Title}</h1>
			<p>{props.Description}</p>

			<p>
				<Link to={`/recipe/${props.id}`}>
					<Button variant="primary">Look At the Recipe</Button>
				</Link>
			</p>
			<p>
				<Button variant="primary" onClick={() => handleDelete(props.id)}>
					Delete Recipe
				</Button>
			</p>
		</Jumbotron>
	);
};

export default RecipeItem;
