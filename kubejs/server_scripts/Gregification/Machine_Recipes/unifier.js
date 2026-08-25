ServerEvents.recipes(allthemods => {
        allthemods.recipes.gtceu.unifier('lubricant_uinification')
                .inputFluids('#forge:lubricant 12')
                .outputFluids('gtceu:lubricant 12')
                .duration(1)
                .EUt(1);

        allthemods.recipes.gtceu.unifier('biodiesel_unification')
                .inputFluids('#forge:biodiesel 12')
                .outputFluids('gtceu:bio_diesel 12')
                .duration(1)
                .EUt(1);
});