ServerEvents.recipes(allthemods => {
    const tiers = {
        ULV: 8, LV: 32, MV: 128, HV: 512, EV: 2048,
        IV: 8192, LuV: 32768, ZPM: 131072, UV: 524288
    };
    const addPA = (itemsIn, itemOut, fluidIn, fluidOut, tier, duration, customID) => {

        let outputID = '';

        if (customID) {
            outputID = customID;
        }
        else if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');
        } else if (fluidOut) {
            let raw = fluidOut.replace(/^\d+x\s*/, '').split(' ')[0];
            outputID = raw.replace(/[^a-z0-9]/gi, '_');
        } else {
            outputID = 'dissolution_' + Math.floor(Math.random() * 1000);
        }



        let voltage = tiers[tier] || 32;

        let recipe = allthemods.recipes.gtceu.pneumatic_assembler(`gregification:dissolution/${outputID}`)
            .duration(duration)
            .EUt(voltage);

        // Safety check for inputs
        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);   
        
        recipe.notConsumable('pneumaticcraft:assembly_program_drill_laser');
    };

    //advanced pressure tube
    addPA(
        '8x #forge:ingots/compressed_iron',
        '8x pneumaticcraft:advanced_pressure_tube',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        40        
    );

    //aphorism tile
    addPA(
        '#forge:storage_blocks/quartz',
        '4x pneumaticcraft:aphorism_tile',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        40
    );

    //unassembled pcb
    addPA(
        'pneumaticcraft:empty_pcb',
        'pneumaticcraft:unassembled_pcb',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        40
    );

    //solar cell
    addPA(
        'pneumaticcraft:solar_wafer',
        'pneumaticcraft:solar_cell',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80
    );

    //netherite drill bit
    addPA(
        'pneumaticcraft:unassembled_netherite_drill_bit',
        'pneumaticcraft:drill_bit_netherite',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        40
    );

});