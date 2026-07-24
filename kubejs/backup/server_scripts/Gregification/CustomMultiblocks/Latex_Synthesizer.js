ServerEvents.recipes(allthemods => {

    const tiers = {
        ULV: 8, LV: 32, MV: 128, HV: 512, EV: 2048,
        IV: 8192, LuV: 32768, ZPM: 131072, UV: 524288
    };

    const addLatex = (itemsIn, itemOut, fluidIn, fluidOut, tier, duration, program) => {
        let outputID = '';

        if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');
        } else if (fluidOut) {
            let raw = fluidOut.replace(/^\d+x\s*/, '').split(' ')[0];
            outputID = raw.replace(/[^a-z0-9]/gi, '_');
        } else {
            outputID = 'latex_' + Math.floor(Math.random() * 1000);
        }

        if (program) outputID += `_config_${program}`;

        let voltage = tiers[tier] || 32;

        let recipe = allthemods.recipes.gtceu.latex_synthesizer(`gregification:latex/${outputID}`)
            .duration(duration)
            .EUt(voltage);

        if (program) {
            recipe.circuit(program);
        }


        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);
    };

    //latex
    addLatex(
        '#minecraft:logs',
        '80x industrialforegoing:tinydryrubber',
        'minecraft:water 40000',
        null,
        'HV',
        200,
        1
    );

    //logs
    addLatex(
        '#minecraft:logs',
        null,
        'minecraft:water 60000',
        'industrialforegoing:latex 60000',
        'HV',
        800,
        2
    );
});
