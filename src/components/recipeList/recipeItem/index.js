import React from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions/deleteRecipe";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

const RecipeItem = (props) => {
	const dispatch = useDispatch();

	const isLoggedIn = useSelector((state) => state.authReducer.loggedIn);
	const user = useSelector((state) => state.authReducer.user);

	const handleDelete = (id) => {
		dispatch(deleteRecipe(id));
	};

	return (
		// <div className="row-special">
		<div className="col-lg-4 col-md-4 col-sm-6 special">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<Link to={`/recipe/${props.id}`}>
					<img className="recipeImg" src={props.imageUrl} alt="not found"></img>
				</Link>
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 recipeText">
				{/* <div className="recipeText"> */}
				<span className="recipeLabel">{props.recipe_type}</span>
				<span className="recipeTime">
					{props.preperation_minutes + " minutes"}
				</span>

				<Link to={`/recipe/${props.id}`}>
					<h1 className="recipeTitle">{props.Title}</h1>
				</Link>
				<div className="recipeDescription">
					{props.Description.substring(0, 100)}
					<Link to={`/recipe/${props.id}`}>
						<p className="recipeDescription">...read more</p>
					</Link>
				</div>

				<ul className="listul">
					<li className="listli">
						by: <span className="listspan">{props.owner}</span>
					</li>
				</ul>
				{isLoggedIn && props.owner === user && (
					<p>
						<button
							className="btn btn-warning"
							variant="primary"
							onClick={() => handleDelete(props.id)}
						>
							Delete Recipe
						</button>
					</p>
				)}
			</div>
			{/* </div> */}
		</div>
	);
};

export default RecipeItem;
