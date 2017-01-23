export function addRecipe(recipe) {
    return {
        payload: recipe,
        type: 'ADD_RECIPE'
    }
}