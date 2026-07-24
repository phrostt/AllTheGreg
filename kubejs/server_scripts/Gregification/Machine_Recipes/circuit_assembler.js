ServerEvents.recipes(allthemods => {
    const addCircuitAssembler = (itemsIn, fluidIn, itemsOut, eu, duration) => {
        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');

        let recipe = allthemods.recipes.gtceu.circuit_assembler(`gregification:circuit_assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);

        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
    };

    addCircuitAssembler(
        [
            '2x #forge:plates/red_alloy',
            '2x #forge:plates/certus_quartz',
            'ae2:logic_processor',
            '#gtceu:circuits/lv'

        ],
        'gtceu:soldering_alloy 72',
        'ae2:cell_component_1k',
        32,
        120
    )

    //4k cell
    addCircuitAssembler(
        [
            '2x #forge:plates/red_alloy',
            '3x ae2:cell_component_1k',
            'ae2:calculation_processor',
            'ae2:quartz_glass'

        ],
        'gtceu:soldering_alloy 72',
        'ae2:cell_component_4k',
        32,
        120
    )

    //16k cell
    addCircuitAssembler(
        [
            '2x #forge:plates/energetic_alloy',
            '3x ae2:cell_component_4k',
            'ae2:calculation_processor',
            'ae2:quartz_glass'

        ],
        'gtceu:soldering_alloy 72',
        'ae2:cell_component_16k',
        128,
        120
    )

    //64k cell
    addCircuitAssembler(
        [
            '2x #forge:plates/energetic_alloy',
            '3x ae2:cell_component_16k',
            'ae2:calculation_processor',
            'ae2:quartz_glass',
            '8x #forge:fine_wires/selenium'

        ],
        'gtceu:soldering_alloy 72',
        'ae2:cell_component_64k',
        128,
        120
    )

    //256k cell
    addCircuitAssembler(
        [
            '2x #forge:plates/vibrant_alloy',
            '3x ae2:cell_component_64k',
            'ae2:calculation_processor',
            'ae2:quartz_glass',
            '8x #forge:fine_wires/selenium'

        ],
        'gtceu:soldering_alloy 72',
        'ae2:cell_component_256k',
        512,
        120
    )
});