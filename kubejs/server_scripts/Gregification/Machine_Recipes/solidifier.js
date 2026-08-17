ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.fluid_solidifier('if_plastic_plate_solidification')
        .notConsumable('gtceu:plate_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('industrialforegoing:plastic')
        .duration(20) // Takes 1 second
        .EUt(32) // LV tier energy
        .circuit(3);

    allthemods.recipes.gtceu.fluid_solidifier('pnc_plastic_plate_solidification')
        .notConsumable('gtceu:plate_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('pneumaticcraft:plastic')
        .duration(20) // Takes 1 second
        .EUt(32) // LV tier energy
        .circuit(2);

    allthemods.recipes.gtceu.fluid_solidifier('gt_plastic_plate_solidification')
        .notConsumable('gtceu:plate_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('gtceu:plastic_plate')
        .duration(20) // Takes 1 second
        .EUt(32) // LV tier energy
        .circuit(1);
});