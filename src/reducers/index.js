import { combineReducers } from "redux";
import { listPageReducer } from "./listPageReducer";
import { recipePageReducer } from "./recipePageReducer";
import { authReducer } from "./authReducer";
export const rootReducer = combineReducers({
	listPageReducer,
	recipePageReducer,
	authReducer,
});
