import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthStatus } from "../../actions/checkAuthStatus";
import "./style.scss";
import AddRecipe from "../recipeList/addRecipe";

export const ShowLoggedIn = (props) => {
	const isLoggedIn = props.props;

	const dispatch = useDispatch();

	const logOut = () => {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		localStorage.removeItem("user");
		dispatch(checkAuthStatus());
	};

	if (isLoggedIn) {
		return (
			<div className="row justify-content-center">
				<button className="col-lg-3 h4" onClick={logOut}>
					Log out
				</button>
				<AddRecipe />
			</div>
		);
	} else {
		return (
			<div className="row justify-content-center order-3">
				<div className="col-sm-3">
					<Link to={"/logIn"}>
						<h4>Log In</h4>
					</Link>
				</div>
				<div className="col-sm-3">
					<Link to={"/register"}>
						<h4>Register</h4>
					</Link>
				</div>
			</div>
		);
	}
};
