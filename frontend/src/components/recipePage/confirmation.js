import React, { useState } from "react";
import { deleteRecipe } from "../../actions/deleteRecipe";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./style.scss";
const DeleteRecipe = (props) => {
	const [show, setShow] = useState(false);

	let Show = () => setShow(true);
	let Close = () => setShow(false);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteRecipe(id));
		Close();
	};

	return (
		<div>
			<Button className="button" onClick={Show}>
				Delete Recipe
			</Button>
			<Modal show={show} onHide={Close}>
				<Modal.Header>
					<Modal.Title>
						Are you sure you want to delete this recipe?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>ASDHASDHAS</Modal.Body>
				<Modal.Footer>
					<Link to={"/"}>
						<Button onClick={() => handleDelete(props.recipeID)}>Yes</Button>
					</Link>
					<Button onClick={Close}>No</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DeleteRecipe;
