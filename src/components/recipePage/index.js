import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../actions/getRecipe";
import DeleteRecipe from "./confirmation";
import UpdateRecipe from "./updateRecipe";
import { useParams } from "react-router-dom";
import "./style.scss";

const RecipePage = (props) => {
	const dispatch = useDispatch();

	const { id: recipeID } = useParams();
	const getRecipeState = () => {
		dispatch(getRecipe(recipeID));
	};

	useEffect(getRecipeState, []);

	const recipe = useSelector((state) => state.recipePageReducer.recipe);
	const isLoggedIn = useSelector((state) => state.authReducer.loggedIn);
	const user = useSelector((state) => state.authReducer.user);
	console.log(recipe);
	const Title = recipe.Title;
	const Description = recipe.Description;
	const imageUrl = recipe.imageUrl;
	console.log(recipe);
	return (
		<div className="container-fluid pageContainer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="pageTitle">{Title}</div>
				</div>
				<div className="row justify-content-center">
					{imageUrl && <img src={imageUrl} alt="food"></img>}
				</div>
				<div className="row justify-content-center">
					<ul className="ul">
						<li className="li">
							by: <span className="span">{recipe.owner}</span>
						</li>
						<li className="li">
							for: <span className="span">{recipe.recipe_type}</span>
						</li>
						<li className="li">
							preperation time:{" "}
							<span className="prepTime">
								{recipe.preperation_minutes + " minutes"}{" "}
							</span>
						</li>
					</ul>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-8">
						<p className="pageContent">{Description}</p>
					</div>
				</div>
				{/* <div className="container-fluid"> */}
				{isLoggedIn && user === recipe.owner && (
					<div className="row justify-content-center">
						<DeleteRecipe recipeID={recipeID} />

						<UpdateRecipe recipe={recipe} />
					</div>
				)}
				{/* </div> */}
			</div>
		</div>
	);
};

export default RecipePage;
