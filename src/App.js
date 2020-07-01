import React from "react";
import Header from "./components/Header";
import RecipeList from "./components/recipeList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RecipeList />
    </Provider>
  );
}

export default App;
