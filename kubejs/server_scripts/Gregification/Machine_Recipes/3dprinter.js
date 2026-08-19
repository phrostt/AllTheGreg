ServerEvents.recipes(allthemods => {
    //test recipe for 3d printer
    allthemods.recipes.gtceu.printer('empowered_polymer_lens')
        .inputFluids('#forge:plastic 10000')
        .itemInputs([
            '8x gtceu:empowered_restonia_dust',
            '8x gtceu:empowered_emeradic_dust',
            '8x gtceu:empowered_palis_dust',
            '8x gtceu:empowered_diamatine_dust',
            '8x gtceu:empowered_void_crystal_dust',
            '8x gtceu:empowered_enori_dust'
        ])
        //here
        .itemOutputs('gtceu:empowered_polymer_dust')
        .duration(600)
        .EUt(524288);

    /*allthemods.recipes.gtceu.printer('chaos_plastic_lens')
        .inputFluids('gtceu:chaos_plastic 9216')
        .itemInputs([
            '8x gtceu:tenebrium_dust',
            '8x gtceu:exquisite_black_quartz_gem',
            'gtceu:plastic_singularity'
        ])
        .itemOutputs('64x gtceu:chaos_plastic_dust')
        .duration(600)
        .EUt(524288);
    */ 
});