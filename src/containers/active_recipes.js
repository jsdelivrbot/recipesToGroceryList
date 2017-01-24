import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveRecipes extends Component {
    renderActives() {
        return (
            this.props.recipes.map(recipe => {
                if (recipe.active === true) {
                    return (
                        <li key={recipe.name}>
                            {recipe.name}
                        </li>
                    )
                }
            })
        )
    }

    renderList() {
        let ingredients = {};
        this.props.recipes.map(recipe => {
            if (recipe.active === true) {
                recipe.ingredients.map(ingredient => {
                    if (ingredient in ingredients) {
                        ingredients[ingredient] += 1;
                    }
                    else {
                        ingredients[ingredient] = 1;
                    }
                })
            }
        });

        return Object.keys(ingredients).map(key => {
            return (
                <li key={key}>
                    {key}: {ingredients[key]}
                </li>
            )
        });
    }


    render(){
        return (
            <div>
                <h2>Active Recipes:</h2>
                <ul>
                    {this.renderActives()}
                </ul>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(ActiveRecipes)