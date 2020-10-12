import { types } from "./types";
import axios from "axios";

export const deleteRecipe = (id) => async (dispatch) => {
	const link = `${process.env.REACT_APP_RECIPE_API}/api/recipes/${id}`;
	axios({
		method: "delete",
		url: link,
		headers: {
			authorization: `Bearer ${localStorage.getItem("access")}`,
		},
	}).then(() => {
		dispatch({
			type: types.DELETE_RECIPE,
			payload: id,
		});
	});
};
