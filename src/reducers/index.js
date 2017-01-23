import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes'
import ActiveRecipes from './reducer_add_recipe'

const rootReducer = combineReducers({
    recipes: RecipeReducer,
    activeRecipes: ActiveRecipes
});

export default rootReducer;
