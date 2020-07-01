import React from "react";
import RecipeItem from "./RecipeItem";
import AddRecipe from "./AddRecipe";
import { useSelector } from "react-redux";

const RecipeList = (props) => {
  //   const recipyList = useSelector();
  return (
    <div>
      <h1>Recipe List</h1>
      <RecipeItem />
      <AddRecipe />
    </div>
  );
};

export default RecipeList;
