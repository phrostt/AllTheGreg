ServerEvents.recipes(allthemods => {
    const components = ['nugget','dust','ingot','rod'];
    const components2 = ['tiny:dust','small:dust','long:rod'];
    const baseMaterial = 'eternium';
    const magneticMaterial = 'magnetic_eternium';
    
    components.forEach(type => {        
        let recipeId = `gregification:polarize_${baseMaterial}_${type}`;
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${baseMaterial}_${type}`)
            .itemOutputs(`gtceu:${magneticMaterial}_${type}`)
            .duration(150)
            .EUt(524288);
    });

    components2.forEach(type => {        
        let recipeId = `gregification:polarize_${baseMaterial}_${type.replace(':', '_')}`;
        let m = type.split(':')
        allthemods.recipes.gtceu.polarizer(recipeId)
            .itemInputs(`gtceu:${m[0]}_${baseMaterial}_${m[1]}`)
            .itemOutputs(`gtceu:${m[0]}_${magneticMaterial}_${m[1]}`)            
            .duration(150)
            .EUt(524288);
    });

    /*  allthemods.recipes.gtceu.polarizer('magnetize_eternium_long_rod')
            .itemInputs('gtceu:long_eternium_rod')
            .itemOutputs('gtceu:long_magnetic_eternium_rod')
            .duration(150)
            .EUt(524288)


        allthemods.recipes.gtceu.polarizer('magnetize_eternium_ingot')
            .itemInputs('gtceu:eternium_ingot')
            .itemOutputs('gtceu:magnetic_eternium_ingot')
            .duration(150)
            .EUt(524288)
    
        allthemods.recipes.gtceu.polarizer('magnetize_eternium_rod')
            .itemInputs('gtceu:eternium_rod')
            .itemOutputs('gtceu:magnetic_eternium_rod')
            .duration(150)
            .EUt(524288)
    
        allthemods.recipes.gtceu.polarizer('magnetize_eternium_long_rod')
            .itemInputs('gtceu:long_eternium_rod')
            .itemOutputs('gtceu:long_magnetic_eternium_rod')
            .duration(150)
            .EUt(524288)
    
        allthemods.recipes.gtceu.polarizer('magnetize_eternium_dust')
            .itemInputs('gtceu:eternium_dust')
            .itemOutputs('gtceu:magnetic_eternium_dust')
            .duration(150)
            .EUt(524288)*/
});
//baseMetal.getProperty(PropertyKey.INGOT).setMagneicMaterial(magneticMetal); 