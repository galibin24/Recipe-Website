import React from "react";

export const Pagination = (props) => {
	// props.props.setPageNumber(
	// 	Math.ceil(props.props.recipeList.length / props.props.perPage)
	// );
	let buttons = [];
	for (let i = 0; i < props.props.pageNumber; i++) {
		buttons.push(
			<li key={i} className="page-item " role="group">
				<button
					type="button"
					className="page-link"
					value={i}
					onClick={props.props.handleClick}
				>
					{i}
				</button>
			</li>
		);
	}
	return buttons;
};
