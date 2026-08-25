ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.gem_polisher('mana_basic_to_flawless')
        .itemInputs('#forge:gems/mana_essence')
        .chancedInput('gtceu:polishing_wheel', 1000, 0)
        .inputFluids('gtceu:distilled_water 288')
        .itemOutputs('gtceu:flawless_mana_essence_gem')
        .duration(300)
        .EUt(2048);

    allthemods.recipes.gtceu.gem_polisher('mana_flawless_to_exquisite')
        .itemInputs('#forge:flawless_gems/mana_essence')
        .chancedInput('gtceu:polishing_wheel', 2000, 0)
        .inputFluids('gtceu:distilled_water 576')
        .itemOutputs('gtceu:exquisite_mana_essence_gem')
        .duration(300)
        .EUt(8192);

    allthemods.recipes.gtceu.gem_polisher('source_basic_to_flawless')
        .itemInputs('#forge:gems/source')
        .chancedInput('gtceu:polishing_wheel', 1000, 0)
        .inputFluids('gtceu:distilled_water 288')
        .itemOutputs('gtceu:flawless_source_gem')
        .duration(300)
        .EUt(2048);

    allthemods.recipes.gtceu.gem_polisher('source_flawless_to_exquisite')
        .itemInputs('#forge:flawless_gems/source')
        .chancedInput('gtceu:polishing_wheel', 2000, 0)
        .inputFluids('gtceu:distilled_water 576')
        .itemOutputs('gtceu:exquisite_source_gem')
        .duration(300)
        .EUt(8192);

    allthemods.recipes.gtceu.gem_polisher('air_polishing')
        .itemInputs(['elementalcraft:air_shard', 'elementalcraft:aircrystal'])
        .inputFluids('gtceu:distilled_water 250')
        .itemOutputs('elementalcraft:powerful_air_shard')
        .duration(150)
        .EUt(2048);
    
    allthemods.recipes.gtceu.gem_polisher('fire_polishing')
        .itemInputs(['elementalcraft:fire_shard', 'elementalcraft:firecrystal'])
        .inputFluids('gtceu:distilled_water 250')
        .itemOutputs('elementalcraft:powerful_fire_shard')
        .duration(150)
        .EUt(2048);

    allthemods.recipes.gtceu.gem_polisher('water_polishing')
        .itemInputs(['elementalcraft:water_shard', 'elementalcraft:watercrystal'])
        .inputFluids('gtceu:distilled_water 250')
        .itemOutputs('elementalcraft:powerful_water_shard')
        .duration(150)
        .EUt(2048);

    allthemods.recipes.gtceu.gem_polisher('earth_polishing')
        .itemInputs(['elementalcraft:earth_shard', 'elementalcraft:earthcrystal'])
        .inputFluids('gtceu:distilled_water 250')
        .itemOutputs('elementalcraft:powerful_earth_shard')
        .duration(150)
        .EUt(2048);
    
    allthemods.recipes.gtceu.crystal_growth_chamber('chaos_frag_polishing')
        .itemInputs('draconicevolution:small_chaos_frag')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('draconicevolution:medium_chaos_frag')
        .duration(750)
        .EUt(32768);
    
    allthemods.recipes.gtceu.crystal_growth_chamber('gaia_growth')
        .itemInputs(['16x #forge:rounds/fireite', 'bloodmagic:demonslate', 'evilcraft:garmonbozia', 'elementalcraft:purecrystal'])
        .inputFluids(['#forge:mana_essence 16000', '#forge:soul 16000', '#forge:sanguine_concentrate 16000'])
        .itemOutputs('16x botania:life_essence')
        .duration(750)
        .EUt(32768);
});

