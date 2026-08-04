ServerEvents.recipes(allthemods => {
    const filter = Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:activated_carbon_slurry"}}').strongNBT();
    allthemods.recipes.gtceu.canner('carbon_slurry_filter')
        .itemInputs('gtceu:fluid_cell')
        .inputFluids('#forge:activated_carbon_slurry 1000')
        .itemOutputs(filter)        
        .duration(600)
        .EUt(512);
});