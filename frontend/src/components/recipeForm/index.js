import React from "react";
import { useFormik, Form as FormF, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../actions/addRecipe";
import { updateRecipe } from "../../actions/updateRecipe";
import Button from "react-bootstrap/Button";

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
	return (
		<div className="Custom-modal">
			<div className="content">
				<div className="header">Please enter your information here.</div>
				<div className="body">
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
					</form>
				</div>
				<div className="footer">
					<button className="c-button" onClick={props.Close}>
						Close
					</button>
					<button className="c-button" form="recipe-form" type="submit">
						Save the recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeForm;
