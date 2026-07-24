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

});

