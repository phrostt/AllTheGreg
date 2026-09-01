ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.canner ('bottle_o_enchanting')
        .inputFluids('#forge:experience 250')
        .itemInputs('minecraft:glass_bottle')
        .itemOutputs('minecraft:experience_bottle')
        .duration(60)
        .EUt(512);

});