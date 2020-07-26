import { combineReducers } from "redux";
import { listPageReducer } from "./listPageReducer";
import { recipePageReducer } from "./recipePageReducer";

export const rootReducer = combineReducers({
	listPageReducer,
	recipePageReducer,
});
