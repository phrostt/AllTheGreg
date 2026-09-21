ServerEvents.recipes(allthemods => {
    allthemods.forEachRecipe({ type: 'evilcraft:blood_infuser' }, recipe => {
        console.error(recipe.json)
    })
    
});