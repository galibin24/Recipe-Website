import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
export const Logo = (props) => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<Link to={"/"} className="logo">
					<h1 className="row logo-var-one">
						Everyday <p className="col-1 logo-var-two">Recipes</p>
					</h1>
				</Link>
			</div>
		</div>
	);
};
