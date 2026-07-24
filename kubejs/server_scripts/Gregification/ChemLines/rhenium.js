  ServerEvents.recipes(allthemods => {

    const RheniumEUSimple = 512;
    const RheniumEUComplex = 32768; //LuV
    // ==========================================
    // THE 4-STEP RHENIUM EXTRACTION CHAIN
    // ==========================================
    
    // Step 1: Perrhenate Synthesis
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rhenium_perrhenate_synthesis')
        .itemInputs('2x #forge:dusts/rhenite', '#forge:dusts/sodium_carbonate')
        .inputFluids('#forge:peroxodisulfuric_acid 1000', 'gtceu:oxygen 12000')
        .itemOutputs('2x gtceu:sodium_perrhenate_dust')
        .outputFluids('gtceu:carbon_dioxide 1000', 'gtceu:sulfur_dioxide 6000', 'minecraft:water 1000')
        .duration(400).EUt(RheniumEUComplex);

    // Step 2: Acidification
    allthemods.recipes.gtceu.chemical_reactor('gregification:perrhenic_acid_synthesis')
        .itemInputs('#forge:dusts/sodium_perrhenate')
        .inputFluids('#forge:hydrochloric_acid 1000')
        .itemOutputs('1x gtceu:salt_dust')
        .outputFluids('gtceu:perrhenic_acid 1000')
        .duration(200).EUt(RheniumEUComplex); 

    // Step 3: Sulfide Precipitation
    allthemods.recipes.gtceu.chemical_reactor('gregification:rhenium_sulfide_precipitation')
        .inputFluids('#forge:perrhenic_acid 2000', 'gtceu:hydrogen_sulfide 7000')
        .itemOutputs('1x gtceu:rhenium_heptasulfide_dust')
        .outputFluids('minecraft:water 8000')
        .duration(300).EUt(RheniumEUComplex); 

    // Step 4: High-Temp Reduction & Gas Recovery
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:rhenium_reduction')
        .itemInputs('#forge:dusts/rhenium_heptasulfide')
        .inputFluids('#forge:hydrogen 14000')
        .itemOutputs('2x gtceu:rhenium_dust') 
        .outputFluids('gtceu:hydrogen_sulfide 7000')
        .blastFurnaceTemp(3200)
        .duration(600).EUt(RheniumEUComplex); 
});