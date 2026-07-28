ServerEvents.recipes(allthemods => {
    let TenebriumEU = 8388608
    let otherEU = 2097152
    allthemods.recipes.gtceu.sifter('gregification:tenebrius_sifting')
        .itemInputs('gtceu:tenebrius_dust')
        .itemOutputs('gtceu:unrefined_tenebrius_dust')
        .chancedOutput('bloodmagic:sand_hellforged', 1500, 1500)
        .chancedOutput('gtceu:iesnium_dust', 1500, 1500)
        .duration(400).EUt(TenebriumEU);
    
    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:tenebrius_gem')
        .itemInputs('#forge:dusts/unrefined_tenebrius')
        .inputFluids('#forge:liquid_chaos 2000')        
        .itemOutputs('gtceu:refined_tenebrius_gem')
        .duration(800)
        .EUt(TenebriumEU);

        
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:tenebrius_gem_processing')
        .itemInputs('#forge:dusts/refined_tenebrius', '#forge:dusts/calcium_nitrate', '#forge:dusts/calcium_sulfide')
        .inputFluids('#forge:peroxodisulfuric_acid 1000', '#forge:fluoroantimonic_acid 1000', '#forge:hydrogen_peroxide 1000')
        .itemOutputs('gtceu:purified_tenebrius_dust', 'gtceu:antimony_trifluoride_dust', '2x gtceu:calcium_fluoride_dust')
        .outputFluids('gtceu:sulfuric_acid 3000', 'gtceu:dinitrogen_tetroxide 1000')
        .duration(800)
        .EUt(TenebriumEU);
    
    allthemods.recipes.gtceu.centrifuge('gregification:tenebrius_dust_processing')
        .itemInputs('#forge:dusts/purified_tenebrius')
        .chancedOutput('gtceu:small_tenebrium_dust', 1500, 1500)
        .duration(800)
        .EUt(TenebriumEU);
});