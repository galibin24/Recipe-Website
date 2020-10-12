import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../actions/addRecipe";
import { updateRecipe } from "../../actions/updateRecipe";

import "./style.scss";

const validationSchema = Yup.object().shape({
	Title: Yup.string()
		.min(2, "*Title must have at least 2 characters")
		.max(100, "*Title can't be longer than 100 characters")
		.required("*Title is required"),
	Description: Yup.string()
		.min(5, "*Description must have at least 5 characters")
		.required("*Description is required"),
	preperation_minutes: Yup.number()
		.max(9999, "*Please enter a number in this field")
		.required("This field is required"),
	recipe_type: Yup.string().required("Please choose the type of your recipe."),
});

const InitialValues = (props) => {
	if (!props.recipe) {
		return {
			values: {
				Title: "",
				Description: "",
				recipe_type: "",
				preperation_minutes: "",
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

	const closeModal = () => {
		setTimeout(() => props.Close());
	};
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
				<div className="header">Please enter your recipe</div>
				<div className="body">
					<form id="recipe-form" onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<label className="titleLabel" htmlFor="Title">
								Recipe Title
							</label>
							<input
								className="form-control"
								id="Title"
								name="Title"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.Title}
							/>
							{formik.errors.Title && (
								<div className="error-message">{formik.errors.Title}</div>
							)}
						</div>

						<div className="form-group" aria-label="With textarea">
							<label className="descriptionLabel" htmlFor="Description">
								Recipe Description
							</label>
							<textarea
								class="form-control"
								aria-label="With textarea"
								id="Description"
								name="Description"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.Description}
							/>
							{formik.errors.Description && (
								<div className="error-message">{formik.errors.Description}</div>
							)}
						</div>
						<div className="form-group">
							<label>Minutes to prepare</label>
							<input
								className="form-control"
								id="preperation_minutes"
								name="preperation_minutes"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.preperation_minutes}
							/>
							{formik.errors.preperation_minutes && (
								<div className="error-message">
									{formik.errors.preperation_minutes}
								</div>
							)}
						</div>
						<div className="form-group">
							<label for="recipe_type">Choose you recipe type</label>
							<select
								className="form-control"
								id="recipe_type"
								name="recipe_type"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.recipe_type}
							>
								<option value="DI">Dinner</option>
								<option value="DE">Lunch</option>
								<option value="LH">Dessert</option>
							</select>
							{formik.errors.recipe_type && (
								<div className="error-message">{formik.errors.recipe_type}</div>
							)}
						</div>
					</form>
				</div>
				<div className="footer">
					<button className="btn btn-warning buttons" onClick={closeModal}>
						Close
					</button>

					<button
						className="btn btn-warning buttons"
						form="recipe-form"
						type="submit"
					>
						Save the recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeForm;
