import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { logInAction } from "../../actions/logInAction";
import "./styles.scss";
const LogIn = () => {
	const [finished, setFinished] = useState(false);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log("send");
			console.log(values);
			axios({
				method: "post",
				url: `${process.env.REACT_APP_RECIPE_API}/api/token/obtain/`,
				data: {
					username: values.username,
					password: values.password,
				},
			})
				.then((response) => {
					console.log(response);

					if (response.status >= 200 && response.status <= 299) {
						dispatch(logInAction(response));
						setFinished(true);
					} else {
						console.log(response);
					}
				})
				.catch((err) => {
					console.log(err);
					let pos = document.getElementById("forLoginError");
					ReactDOM.render(<div>Incorrect username or password</div>, pos);
				});
		},
	});
	return (
		<div className="container">
			<div className="form-row justify-content-center">
				<div className="col-lg-6">
					<form onSubmit={formik.handleSubmit} id="login-form">
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
						</div>

						<button className="btn btn-warning" type="submit">
							{finished ? <Redirect to="/" /> : ""}
							Log In
						</button>
						<div className="forLoginError" id="forLoginError"></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
