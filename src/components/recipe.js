import React, { Component } from 'react';
import addRecipe from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Recipe extends Component{
    constructor(props) {
        super(props)

        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    handleRecipeClick(event) {
        this.props.clickFunc(this.props.recipe)
    }
    render() {
        return (
            <li onClick={this.handleRecipeClick}>
                {this.props.recipe.name}
            </li>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addRecipe: addRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(Recipe);