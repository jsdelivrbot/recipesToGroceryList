export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_RECIPE':
            let filtered;
            state.map(foo => {
               if (action.payload.name == foo.name) {
                   filtered = state.filter(recipe => recipe.name !== foo.name);
               }
            });
            return filtered || [ action.payload, ...state ];
    }
    return state
}