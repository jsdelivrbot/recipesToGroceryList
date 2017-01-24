export default function(state, action) {
    switch(action.type) {
        case 'ADD_RECIPE':
            let toggledRecipe = action.payload;
            let newState = [];
            state.map(recipe => {
                if (toggledRecipe.name == recipe.name){
                    toggledRecipe.active = !toggledRecipe.active;
                    newState.push(toggledRecipe);
                }
                else {
                    newState.push(recipe);
                }
            });
            return newState;
    }
    return [
        {
            name: "Veggetti Alfredo",
            active: false,
            count: 0,
            ingredients: [
                "Zucchini",
                "Cream Cheese",
                "Half & Half",
                "Parmesan",
                "Garlic"
            ]
        },
        {
            name: "Veggetti Marinara",
            active: false,
            count: 0,
            ingredients: [
                "Zucchini",
                "Marinara"
            ]
        },
        {
            name: "Broccoli Stirfry",
            active: false,
            count: 0,
            ingredients: [
                "Chicken",
                "Broccoli",
                "Soy Sauce",
                "Garlic"
            ]
        },
        {
            name: "Burgers",
            active: false,
            count: 0,
            ingredients: [
                "Beef Patties",
                "Cheese",
                "Vegetable of Choice"
            ]
        }
    ]
}