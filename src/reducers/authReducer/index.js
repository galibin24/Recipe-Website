import { types } from "../../actions/types";

export const authReducer = (state = { loggedIn: false, user: "" }, action) => {
	switch (action.type) {
		case types.CHECK_AUTH_STATUS:
			return Object.assign({}, state, {
				loggedIn: action.payload.loggedIn,
				user: action.payload.user,
			});
		case types.LOG_IN:
			console.log(action.payload);
			return Object.assign({}, state, {
				loggedIn: action.payload.loggedIn,
				user: action.payload.user,
			});
		default:
			return state;
	}
};
