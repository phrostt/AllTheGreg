ServerEvents.recipes(allthemods => {
    const components = ['nugget','dust','ingot','rod'];
    const components2 = ['tiny:dust','small:dust','long:rod'];
    const baseMaterial = 'eternium';
    const magneticMaterial = 'magnetic_eternium';
    const baseMaterial2 = 'samarium_cobalt';
    const magneticMaterial2 = 'magnetic_samarium_cobalt';
    
    components.forEach(type => {        
        let recipeId = `gregification:polarize_${baseMaterial}_${type}`;
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${baseMaterial}_${type}`)
            .itemOutputs(`gtceu:${magneticMaterial}_${type}`)
            .duration(150)
            .EUt(524288);

        recipeId = `gregification:polarize_${baseMaterial2}_${type}`;
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${baseMaterial2}_${type}`)
            .itemOutputs(`gtceu:${magneticMaterial2}_${type}`)
            .duration(150)
            .EUt(131072);
    });

    components2.forEach(type => {        
        let recipeId = `gregification:polarize_${baseMaterial}_${type.replace(':', '_')}`;
        let m = type.split(':')
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${m[0]}_${baseMaterial}_${m[1]}`)
            .itemOutputs(`gtceu:${m[0]}_${magneticMaterial}_${m[1]}`)            
            .duration(150)
            .EUt(524288);

        recipeId = `gregification:polarize_${baseMaterial2}_${type.replace(':', '_')}`;
        m = type.split(':')
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${m[0]}_${baseMaterial2}_${m[1]}`)
            .itemOutputs(`gtceu:${m[0]}_${magneticMaterial2}_${m[1]}`)            
            .duration(150)
            .EUt(131072);
    });

    
});