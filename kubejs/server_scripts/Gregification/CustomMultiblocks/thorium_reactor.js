ServerEvents.recipes(allthemods => {

    allthemods.recipes.gtceu.thorium_reactor('allthemods:thorium_reactor/single_cell')
        .itemInputs('gtceu:thorium_single')
        .itemOutputs('chemlib:protactinium_dust')
        .inputFluids('gtceu:distilled_water 16000')
        .outputFluids(['gtceu:xenon 2000', 'gtceu:radioactive_bioresidue 2000'])
        .duration(1500)
        .EUt(-131072);

    allthemods.recipes.gtceu.thorium_reactor('allthemods:thorium_reactor/double_cell')
        .itemInputs('gtceu:thorium_double')
        .itemOutputs('2x chemlib:protactinium_dust')
        .inputFluids('gtceu:distilled_water 16000')
        .outputFluids(['gtceu:xenon 4000', 'gtceu:radioactive_bioresidue 4000'])
        .duration(3150)
        .EUt(-131072);

    allthemods.recipes.gtceu.thorium_reactor('allthemods:thorium_reactor/quad_cell')
        .itemInputs('gtceu:thorium_quad')
        .itemOutputs('4x chemlib:protactinium_dust')
        .inputFluids('gtceu:distilled_water 16000')
        .outputFluids(['gtceu:xenon 8000', 'gtceu:radioactive_bioresidue 8000'])
        .duration(6500)
        .EUt(-131072);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_thorium_reactor')
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_electric_motor',
            '2x #forge:plates/rhodium_plated_palladium',
            '4x #forge:plates/graphite',
            '4x #forge:rods/hafnium',
            '2x #forge:frames/hop_graphite'
        )
        .itemOutputs('gtceu:thorium_reactor')
        .inputFluids('#forge:soldering_alloy 1000')
        .scannerResearch('gtceu:thorium_single')
        .duration(600)
        .EUt(32768);
});

