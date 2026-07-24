    ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.liquifier('drone_to_mana')
        .itemInputs('#forestry:bees')
        .inputFluids('gtceu:distilled_water 144')
        .outputFluids('gtceu:mana_essence 144')
        .duration(600)
        .EUt(128)
    
    allthemods.recipes.gtceu.liquifier('liquid_binder')
        .itemInputs('enderio:conduit_binder')        
        .outputFluids('gtceu:conduit_binder 144')
        .duration(50)
        .EUt(128)

    allthemods.recipes.gtceu.liquifier('shard_liquification')
        .itemInputs('draconicevolution:large_chaos_frag')
        .inputFluids('gtceu:primordial_cosmic_soup 1000')
        .outputFluids('gtceu:liquid_chaos 1000')
        .duration(1200)
        .EUt(128)
    });