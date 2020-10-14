import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuthStatus } from "../../actions/checkAuthStatus";
import { ShowLoggedIn } from "./ShowLoggedIn";

const Header = (props) => {
	const dispatch = useDispatch();

	const updateAuthStatus = () => {
		dispatch(checkAuthStatus());
	};

	const isLoggedIn = useSelector((state) => state.authReducer.loggedIn);
	useEffect(updateAuthStatus, [isLoggedIn]);

	return (
		<header className="header sticky-top">
			<button
				className="navButton"
				type="button"
				data-toggle="collapse"
				data-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				<i className="fas fa-bars navBar"></i>
			</button>

			<nav
				className="header_top collapse dont-collapse-sm"
				id="collapseExample"
			>
				<div className="container ">
					<div className="row justify-content-centre ">
						<div className="col name">
							<Link to={"/"}>
								<h4>Home</h4>
							</Link>
						</div>
						<div className="col name">
							<Link to={"/lunch"}>
								<h4>Lunch</h4>
							</Link>
						</div>
						<div className="col name">
							<Link to={"/dinner"}>
								<h4>Dinners</h4>
							</Link>
						</div>
						<div className="col name">
							<Link to={"/dessert"}>
								<h4>Desserts</h4>
							</Link>
						</div>
						<div className="col name">
							<Link to={"/AboutUs"}>
								<h4>About us</h4>
							</Link>
						</div>
					</div>
					<ShowLoggedIn props={isLoggedIn} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
