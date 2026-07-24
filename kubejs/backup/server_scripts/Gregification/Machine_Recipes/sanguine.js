ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.sanguine_refinery('evil_to_sanguuine')        
        .inputFluids('evilcraft:blood 144')
        .outputFluids('gtceu:sanguine_concentrate 144')
        .duration(60)
        .EUt(512)

    allthemods.recipes.gtceu.sanguine_refinery('blood_to_sanguuine')        
        .inputFluids('bloodmagic:life_essence_fluid 144')
        .outputFluids('gtceu:sanguine_concentrate 144')
        .duration(60)
        .EUt(512)
});