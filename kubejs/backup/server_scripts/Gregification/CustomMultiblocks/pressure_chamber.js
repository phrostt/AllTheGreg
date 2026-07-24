ServerEvents.recipes(allthemods => {
    const tiers = {
        ULV: 8, LV: 32, MV: 128, HV: 512, EV: 2048,
        IV: 8192, LuV: 32768, ZPM: 131072, UV: 524288
    };
    const addPC = (itemsIn, itemOut, fluidIn, fluidOut, tier, duration, customID, program) => {

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

        let recipe = allthemods.recipes.gtceu.industrial_pressure_chamber(`gregification:dissolution/${outputID}`)
            .duration(duration)
            .EUt(voltage);

        // Safety check for inputs
        if (program) {
            recipe.circuit(program); 
        }	

        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);        

    };

    //compressed iron block
    addPC(
        '4x #forge:storage_blocks/iron',
        '4x pneumaticcraft:compressed_iron_block',
        'gtceu:compressed_air 2000',
        null,
        'EV',
        200,
        null,
        1
    );

    //compressed iron ingot
    addPC(
        '32x #forge:ingots/iron',
        '32x pneumaticcraft:ingot_iron_compressed',
        'gtceu:compressed_air 2000',
        null,
        'EV',
        200,
        null,
        1
    );

    //wrought iron block
    addPC(
        '4x #forge:storage_blocks/iron',
        '4x gtceu:wrought_iron_block',
        'gtceu:compressed_air 2000',
        null,
        'EV',
        200,
        null,
        2
    );

    //wrought iron ingot
    addPC(
        '32x #forge:ingots/iron',
        '32x gtceu:wrought_iron_ingot',
        'gtceu:compressed_air 2000',
        null,
        'EV',
        200,
        null,
        2
    );
   
    //compressed bee
    addPC(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iron"}}').strongNBT(),
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:compressed_iron"}}').strongNBT(),
        'gtceu:compressed_air 1000',
        null,
        'EV',
        2000,
        'compressed_bee'
    );

    //slime ball
    addPC(
        '4x #forge:dyes/green',
        '4x minecraft:slime_ball',
        ['gtceu:compressed_air 100', '#forge:milk 100'],
        null,
        'EV',
        20,
    );

    //ice
    addPC(
        '64x minecraft:snow_block',
        '16x minecraft:ice',
        'gtceu:compressed_air 100',
        null,
        'EV',
        40,
    );

    //packed ice
    addPC(
        '64x minecraft:ice',
        '16x minecraft:packed_ice',
        'gtceu:compressed_air 100',
        null,
        'EV',
        40,
    );

    //blue ice
    addPC(
        '16x minecraft:packed_ice',
        '4x minecraft:blue_ice',
        'gtceu:compressed_air 100',
        null,
        'EV',
        40,
    );

    //creative compressor
    addPC(
        ['64x pneumaticcraft:advanced_pressure_tube',
            '64x pneumaticcraft:advanced_pressure_tube',
            '64x pneumaticcraft:advanced_pressure_tube',
            '64x pneumaticcraft:advanced_pressure_tube',
            'pneumaticcraft:advanced_liquid_compressor',
            'pneumaticcraft:flux_compressor',
            'pneumaticcraft:advanced_air_compressor',
            'pneumaticcraft:electrostatic_compressor',
            'allthetweaks:atm_star'],
        'pneumaticcraft:creative_compressor',
        'gtceu:compressed_air 10000',
        null,
        'IV',
        4000,
        'creative_compressor'
    );

    //flour
    addPC(
        '8x #forge:grain/wheat',
        '24x pneumaticcraft:wheat_flour',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        10,
    );

    //sourdough - using forge flour dust
    addPC(
        '24x #forge:dusts/flour',
        '24x pneumaticcraft:sourdough',
        ['pneumaticcraft:yeast_culture 4000', 'gtceu:compressed_air 1000'],
        null,
        'EV',
        10,
    );

    //compressed stone
    addPC(
        '32x #forge:stone',
        '32x pneumaticcraft:compressed_stone',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80,
    );

    //transistor
    addPC(
        ['8x #forge:plates/plastic', '32x #forge:fine_wires/tin'],
        '8x pneumaticcraft:transistor',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80,
    );

    //capacitor
    addPC(
        ['8x #forge:plates/plastic', '32x #forge:fine_wires/gold'],
        '8x pneumaticcraft:capacitor',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80,
    );

    //pulsating black hole
    addPC(
        ['mythicbotany:mjoellnir',
            'apotheosis:sigil_of_withdrawal',
            'evilcraft:lightning_bomb',
            'forbidden_arcanus:dark_rune_block',
            'thermal_extra:abyssal_rf_coil_xfer_augment',
            'occultism:stable_wormhole',
            'irons_spellbooks:fire_upgrade_orb',            
            'ae2:quantum_ring',
            Item.of('pneumaticcraft:micromissiles', '{Damage:0}').strongNBT()],
        'allthetweaks:pulsating_black_hole',
        'gtceu:compressed_air 10000',
        null,
        'IV',
        4000,
        'pulsating_black_hole'
    );

    //etching acid
    addPC(
        '#forge:dusts/gunpowder',
        null,
        ['gtceu:iron_iii_chloride 1000', '#forge:plastic 2000', 'gtceu:hydrochloric_acid 2000', 'gtceu:compressed_air 1000'],
        'pneumaticcraft:etching_acid 1000',
        'EV',
        40,
    );

    //empty pcb
    addPC(
        ['8x #forge:plates/plastic', '32x #forge:fine_wires/platinum', '32x #forge:fine_wires/copper'],
        '8x pneumaticcraft:empty_pcb',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80,
    );

    //creative compressed iron block
    addPC(
        ['64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            '64x #forge:storage_blocks/compressed_iron',
            'allthetweaks:atm_star'],
        'pneumaticcraft:creative_compressed_iron_block',
        'gtceu:compressed_air 10000',
        null,
        'IV',
        4000,
        'creative_compressed_iron_block'
    );

    //turbine blade
    addPC(
        ['#forge:ingots/gold', '2x #forge:dusts/redstone'],
        'pneumaticcraft:turbine_blade',
        'gtceu:compressed_air 100',
        null,
        'EV',
        40,
    );

    //diamond
    addPC(
        '8x #forge:storage_blocks/coal',
        'minecraft:diamond',
        'gtceu:compressed_air 1000',
        null,
        'EV',
        80,
    );

    //solar wafer
    addPC(
        ['pneumaticcraft:upgrade_matrix', 'minecraft:amethyst_shard'],
        'pneumaticcraft:solar_wafer',
        'gtceu:compressed_air 500',
        null,
        'EV',
        40,
    );
});