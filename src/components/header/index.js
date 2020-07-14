import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<Link to={"/"}>
			<header className="header">Recipe Website</header>
		</Link>
	);
};

export default Header;
