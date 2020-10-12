import axios from "axios";
import { types } from "./types";

export const checkAuthStatus = () => async (dispatch) => {
	console.log("checking Authentification status");

	const link = `${process.env.REACT_APP_RECIPE_API}/api/token/refresh/`;
	const refresh = localStorage.getItem("refresh");

	axios({
		method: "post",
		url: link,
		data: {
			refresh: refresh,
		},
	})
		.then((response) => {
			const user = localStorage.getItem("user");
			console.log(response);
			if (response.data.access) {
				localStorage.setItem("access", `${response.data.access}`);
				dispatch({
					type: types.CHECK_AUTH_STATUS,
					payload: { loggedIn: true, user: user },
				});
			}
		})
		.catch((error) => {
			dispatch({
				type: types.CHECK_AUTH_STATUS,
				payload: false,
			});
		});
};
