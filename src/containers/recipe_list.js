import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import Recipe from '../components/recipe'

class RecipeList extends Component {
    renderList() {
        return this.props.recipes.map(recipe => {
            return (
                <li key={recipe.name}
                    onClick={() => this.props.addRecipe(recipe)}>
                    {recipe.name}
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {/*{this.renderList()}*/}
                {this.props.recipes.map(r => <Recipe key={r.name} recipe={r} clickFunc={this.props.addRecipe}/>)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addRecipe}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)