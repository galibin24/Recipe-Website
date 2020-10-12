import { types } from "./types";

export const logInAction = (response) => {
	console.log("checking Authentification status");

	localStorage.setItem("access", response.data.access);
	localStorage.setItem("refresh", response.data.refresh);
	localStorage.setItem("user", response.data.user);

	return {
		type: types.LOG_IN,
		payload: { loggedIn: true, user: response.data.user },
	};
};
