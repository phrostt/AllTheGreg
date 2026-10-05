ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.canner ('bottle_o_enchanting')
        .inputFluids('#forge:experience 250')
        .itemInputs('minecraft:glass_bottle')
        .itemOutputs('minecraft:experience_bottle')
        .duration(60)
        .EUt(HV);

});