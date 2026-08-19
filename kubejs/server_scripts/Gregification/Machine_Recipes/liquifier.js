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
        .EUt(8192)

    allthemods.recipes.gtceu.liquifier('source_gem_block_to_source')
        .itemInputs('#forge:storage_blocks/source')
        .inputFluids('gtceu:distilled_water 2000')
        .outputFluids('gtceu:source 4500')
        .duration(100)
        .EUt(2018)
    
    allthemods.recipes.gtceu.liquifier('source_gem_to_source')
        .itemInputs('#forge:gems/source')
        .inputFluids('gtceu:distilled_water 500')
        .outputFluids('gtceu:source 500')
        .duration(100)
        .EUt(2048)

    
    allthemods.recipes.gtceu.liquifier('poison')
        .itemInputs('evilcraft:poison_sac')
        .inputFluids('gtceu:purest_water 250')
        .outputFluids('evilcraft:poison 250')
        .duration(100)
        .EUt(2048)
    
    allthemods.recipes.gtceu.liquifier('blood')
        .itemInputs('evilcraft:condensed_blood')
        .inputFluids('gtceu:distilled_water 500')
        .outputFluids('gtceu:sanguine_concentrate 500')
        .duration(100)
        .EUt(512)

    });