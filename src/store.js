import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { loadState, saveState } from "./LocalStorage";

const initialState = loadState();

const middleware = [thunk];

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(...middleware)
	// other store enhancers if any
);

const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(() => {
	saveState({
		listPageReducer: store.getState().listPageReducer,
	});
});

export default store;
