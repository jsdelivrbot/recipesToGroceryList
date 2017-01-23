import React, { Component } from 'react';
import RecipeList from '../containers/recipe_list';
import ActiveRecipes from '../containers/active_recipes';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <RecipeList/>
          <ActiveRecipes />
          <Footer/>
        </div>
    );
  }
}
