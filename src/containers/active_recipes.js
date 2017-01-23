import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveRecipes extends Component {
    renderList() {
        let ingredients = {};
        this.props.activeRecipes.map(ar => {
           ar.ingredients.map(ingredient => {
             if (ingredient in ingredients) {
                 ingredients[ingredient] += 1;
             }
             else {
                 ingredients[ingredient] = 1;
             }
           })
        });

        return Object.keys(ingredients).map(k => {
            return (
                <li key={k}>
                    {k}: {ingredients[k]}
                </li>
            )
        });
    }


    render(){
        return (
            <div>
                <h2>Active Recipes:</h2>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeRecipes: state.activeRecipes
    }
}

export default connect(mapStateToProps)(ActiveRecipes)