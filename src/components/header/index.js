import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
	console.log(process.env.REACT_APP_NOT_SECRET_CODE);
	return (
		<Link to={"/"}>
			<header className="header">Recipe Website</header>
			<h1>{process.env.REACT_APP_NOT_SECRET_CODE}</h1>
		</Link>
	);
};

export default Header;
