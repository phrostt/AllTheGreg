ServerEvents.recipes(allthemods => {
    // --- Strontium Chain ---
    const StrontiumEUSimple = 512; //LuV
    const StrontiumEUComplex = 32768; //LuV
    // Step 1: Blast Furnace
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontium_sulfide_smelting')
        .itemInputs('#forge:dusts/celestite', '#forge:dusts/carbon')
        .itemOutputs('gtceu:strontium_sulfide_dust')
        .outputFluids('gtceu:carbon_tetroxide')
        .blastFurnaceTemp(2500)
        .duration(300).EUt(StrontiumEUComplex);

    // Step 2: Large Chemical Reactor
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontium_carbonate_reaction')
        .itemInputs('#forge:dusts/strontium_sulfide', '#forge:dusts/soda_ash')
        .itemOutputs('gtceu:strontium_carbonate_dust', 'gtceu:sodium_sulfide_dust')
        .duration(200).EUt(StrontiumEUComplex); 

    // Step 3: Chemical Reactor
    allthemods.recipes.gtceu.chemical_bath('gregification:strontium_chloride_conversion')
        .itemInputs('#forge:dusts/strontium_carbonate')
        .inputFluids('#forge:hydrochloric_acid 2000')
        .itemOutputs('gtceu:strontium_chloride_dust')
        .outputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
        .duration(200).EUt(StrontiumEUComplex); 
});