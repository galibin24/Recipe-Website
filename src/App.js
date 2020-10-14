import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RecipeList from "./components/recipeList";
import Header from "./components/header";
import RecipePage from "./components/recipePage";
import Register from "./components/Register";
import LogIn from "./components/logIn";
import Lunch from "./components/recipeList/diffrentSortings/lunch";
import Dinner from "./components/recipeList/diffrentSortings/dinners";
import Dessert from "./components/recipeList/diffrentSortings/desserts";
import AboutUs from "./components/aboutUs";
import store from "./store";
import { Logo } from "./components/header/logo";
import "./style.scss";

import dotenv from "dotenv";
dotenv.config();

// don't use react-bootstrap, just vanila bootstrap

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<div>
						<Header />
						<Logo />
						<Route path="/logIn" exact component={LogIn} />
						<Route path="/register" exact component={Register} />
						<Route path="/" exact component={RecipeList} />
						<Route path="/lunch" exact component={Lunch} />
						<Route path="/dinner" exact component={Dinner} />
						<Route path="/dessert" exact component={Dessert} />
						<Route path="/aboutUs" exact component={AboutUs} />
						<Route path="/recipe/:id" component={RecipePage} />
					</div>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
