import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RecipeList from "./components/recipeList";
import Header from "./components/header";
import RecipePage from "./components/recipePage";
import store from "./store";

import "./style.scss";
import Container from "react-bootstrap/Container";

import dotenv from "dotenv";
dotenv.config();

// don't use react-bootstrap, just vanila bootstrap

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Container>
						<Header />
						<Route path="/" exact component={RecipeList} />
						<Route path="/recipe/:id" component={RecipePage} />
					</Container>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
