import React from "react";
import RecipeList from "./components/recipeList";
import Header from "./components/header";
import RecipePage from "./components/recipePage";
import { Provider } from "react-redux";
import store from "./store";
import "./style.scss";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Container>
						<Header />
						<Route path="/" exact component={RecipeList} />
						<Route path="/:id" render={(props) => <RecipePage {...props} />} />
					</Container>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
