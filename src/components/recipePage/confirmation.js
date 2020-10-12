import React, { useState } from "react";
import { deleteRecipe } from "../../actions/deleteRecipe";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";

import "./style.scss";
const DeleteRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => {
		console.log(show);
		setTimeout(() => setShow(false));
	};

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteRecipe(id));
		Close();
	};

	return (
		<div>
			{/* <div className="col-lg-6"> */}
			<button className="btn btn-warning recipeDeleBut" onClick={Show}>
				Delete Recipe
			</button>
			{/* </div> */}

			{show && (
				<div className="Custom-modal">
					<div className="content" show={show.toString()}>
						<div className="body">
							<div>Are you sure you want to delete this recipe?</div>
						</div>
						<div className="footer">
							<Link to={"/"}>
								<button onClick={() => handleDelete(props.recipeID)}>
									Yes
								</button>
							</Link>
							<button onClick={Close}>No</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteRecipe;
