import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../actions/addRecipe";
import { updateRecipe } from "../../actions/updateRecipe";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.scss";

const validationSchema = Yup.object().shape({
	Title: Yup.string()
		.min(2, "*Title must have at least 2 characters")
		.max(100, "*Title can't be longer than 100 characters")
		.required("*Title is required"),
	Description: Yup.string()
		.min(5, "*Description must have at least 5 characters")
		.required("*Description is required"),
});

const InitialValues = (props) => {
	if (!props.recipe) {
		return {
			values: {
				Title: "",
				Description: "",
			},
			new: false,
		};
	}
	return {
		values: {
			Title: props.recipe.Title,
			Description: props.recipe.Description,
		},
		new: true,
	};
};

const RecipeForm = (props) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: InitialValues(props).values,

		onSubmit: (values) => {
			if (!InitialValues(props).new) {
				dispatch(addRecipe(values));
				props.Close();
			}
			values = { ...values, id: props.recipe.id };
			dispatch(updateRecipe(values));
			props.Close();
		},
		validationSchema: validationSchema,
	});
	return (
		<Modal show={props.show} size="lg">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Enter your recipe information.</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form id="recipe-form" onSubmit={formik.handleSubmit}>
						<Form.Group controlId="formTitle">
							<Form.Label>Title of the recipe.</Form.Label>
							<Form.Control
								name="Title"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.Title}
							/>
							{formik.touched.Title && formik.errors.Title ? (
								<div className="error-message">{formik.errors.Title}</div>
							) : null}
						</Form.Group>
						<Form.Group controlId="formDescription">
							<Form.Label>Description of the recipe.</Form.Label>
							<Form.Control
								size="lg"
								as="textarea"
								name="Description"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.Description}
							/>
							{formik.touched.Description && formik.errors.Description ? (
								<div className="error-message">{formik.errors.Description}</div>
							) : null}
						</Form.Group>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={props.Close}>
						Close
					</Button>
					<Button form="recipe-form" type="submit" variant="primary">
						Save the recipe
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</Modal>
	);
};

export default RecipeForm;
