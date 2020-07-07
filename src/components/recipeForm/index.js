import React from "react";
import { useFormik, Form as FormF, Field } from "formik";
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
			new: true,
		};
	}
	return {
		values: {
			Title: props.recipe.Title,
			Description: props.recipe.Description,
		},
		new: false,
	};
};

const RecipeForm = (props) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: InitialValues(props).values,

		onSubmit: (values) => {
			if (InitialValues(props).new) {
				dispatch(addRecipe(values));
				props.Close();
			}
			values = { ...values, id: props.recipe.id };
			dispatch(updateRecipe(values));
			props.Close();
		},
		validationSchema: validationSchema,
		validateOnChange: true,
		validateOnBlur: true,
	});
	console.log(formik.errors);
	return (
		<Modal show={props.show} size="lg">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Enter your recipe information.</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form id="recipe-form" onSubmit={formik.handleSubmit}>
						<label htmlFor="Title">Title</label>
						<input
							id="Title"
							name="Title"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.Title}
						/>
						{formik.errors.Title && (
							<div className="error-message">{formik.errors.Title}</div>
						)}
						<button type="submit">Submit</button>
						<label htmlFor="Description">Description</label>
						<input
							id="Description"
							name="Description"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.Description}
						/>
						{formik.errors.Description && (
							<div className="error-message">{formik.errors.Description}</div>
						)}
						<button type="submit">Submit</button>
					</form>
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
