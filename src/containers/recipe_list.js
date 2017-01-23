import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
    renderList() {
        return this.props.recipes.map(recipe => {
            return (
                <li>
                    {recipe.name}
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    books: state.books
}

export default connect(mapStateToProps)(RecipeList)