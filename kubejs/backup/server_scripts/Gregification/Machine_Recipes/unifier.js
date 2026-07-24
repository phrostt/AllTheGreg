ServerEvents.recipes(allthemods => {
        allthemods.recipes.gtceu.unifier('lubricant_uinification')
                .inputFluids('#forge:lubricant 12')
                .outputFluids('gtceu:lubricant 12')                
                .duration(1)
                .EUt(1);                   
});