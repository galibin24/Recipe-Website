import { combineReducers } from "redux";
import { listPageReducer } from "./listPageReducer";

export const rootReducer = combineReducers({
	listPageReducer: listPageReducer,
});
