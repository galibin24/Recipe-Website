import { types } from "../../actions/types";

const initialState = {
  recipes: [],
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
        return state
    case types.DELETE_RECIPE:
        return state
    default:
      return state;
  }
};
