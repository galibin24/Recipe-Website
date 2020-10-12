import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router";
import "./style.scss";
const validationSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, "*username must have at least 2 characters")
		.max(100, "*username can't be longer than 100 characters")
		.required("*username is required"),
	password: Yup.string()
		.min(5, "*password must have at least 5 characters")
		.required("*password is required"),
});

const Register = () => {
	const [finished, setFinished] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log("send");
			axios({
				method: "post",
				url: `${process.env.REACT_APP_RECIPE_API}/api/user/create`,
				data: {
					username: values.username,
					password: values.password,
				},
			})
				.then((response) => {
					if (response.status === 201) {
						setFinished(true);
					}
				})
				.catch((err) => {
					console.log(err);
					let pos = document.getElementById("forRegistrationError");
					ReactDOM.render(
						<div>The username is already taken. Please enter another.</div>,
						pos
					);
				});
		},
		validationSchema: validationSchema,
		validateOnChange: true,
		validateOnBlur: true,
	});
	return (
		<div className="container">
			<div className="form-row justify-content-center">
				<div className="col-lg-6">
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								className="form-control"
								id="username"
								name="username"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.username}
							/>
							{formik.errors.username && (
								<div className="error-message">{formik.errors.username}</div>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								className="form-control"
								id="password"
								name="password"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.errors.password && (
								<div className="error-message">{formik.errors.password}</div>
							)}
						</div>

						<button className="btn btn-warning" type="submit">
							{finished ? <Redirect to="/" /> : ""}
							Register
						</button>
						<div
							className="forRegistrationError"
							id="forRegistrationError"
						></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
