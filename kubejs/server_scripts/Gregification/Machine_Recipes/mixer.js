ServerEvents.recipes(allthemods => {
    const addMixer = (itemsIn, itemOut, tierOrEu, duration, program) => {
        let rawID = typeof itemOut === 'string' ? itemOut : itemOut.getId();
        let outputID = rawID.replace(/[^a-z0-9]/gi, '_');
        let voltage = (typeof tierOrEu === 'number') ? tierOrEu : (global.tiers[tierOrEu] || 32);

        let recipe = allthemods.recipes.gtceu.mixer(outputID)
            .itemInputs(itemsIn)
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(voltage);
        if (program) recipe.circuit(program);
    };
    
    addMixer(['forbidden_arcanus:arcane_crystal_dust', 'minecraft:redstone', 'minecraft:bone_meal', 'minecraft:gunpowder', 'gtceu:phantom_membrane_dust', 'minecraft:blaze_powder'],'6x forbidden_arcanus:mundabitur_dust', 32, 200)
    addMixer(['6x forbidden_arcanus:mundabitur_dust', '4x #forge:dusts/carbon', '#forge:dusts/gold', '2x forbidden_arcanus:arcane_crystal_dust'],'13x gtceu:deorum_dust', 32, 200)    
    addMixer(['2x gtceu:sculk_dust', '5x #forge:dusts/enderium', '2x #forge:dusts/nether_star', '3x #forge:dusts/redstone'], '12x fluxnetworks:flux_dust', 512, 400)    

    //anti matter alloy dust
    addMixer(
        [
            '3x #forge:dusts/antimatter',
            '3x #forge:dusts/duranium',
            '2x #forge:dusts/darmstadtium',
            '4x #forge:dusts/iridium'

        ],
        '12x gtceu:antimatter_alloy_dust',
        'uiv',
        500
    )

    //singulairty
    addMixer(
        [
            '#forge:singularities/enderium',
            '#forge:singularities/end_steel',            
            '#forge:singularities/platinum',
            '#forge:singularities/elementium',
            '#forge:singularities/refined_obsidian'

        ],
        '64x gtceu:singularity_alloy_dust',
        'uix',
        500
    )

    addMixer(
        [
            '2x #forge:dusts/copper',
            '#forge:dusts/cobalt',
            '#forge:dusts/nether_quartz'

        ],
        '2x gtceu:hepatizon_dust',
        'hv',
        50
    )

    addMixer(
        [
            '3x #forge:dusts/cobalt',
            'minecraft:ancient_debris'

        ],
        '4x gtceu:manyullyn_dust',
        'hv',
        50
    )

    addMixer(
        [
            '1x #forge:dusts/copper',
            '1x #forge:dusts/amethyst',

        ],
        '1x gtceu:amethyst_bronze_dust',
        'hv',
        50
    )

    //absolute
    addMixer(
        [            
            '3x #forge:dusts/strontium',
            '2x #forge:dusts/unobtronium',
            '4x #forge:dusts/tellurium',
            '4x #forge:dusts/radium',

        ],
        '13x gtceu:absolute_alloy_dust',
        'opv',
        500
    )

    //tenebrium
    //cosmic matter

    //rhenium plated nickel
    addMixer(
        [
            '3x #forge:dusts/rhenium',
            '2x #forge:dusts/nickel',
        ],
        '10x gtceu:rhenium_nickel_alloy_dust',
        'LUV',
        500
    )

    //doerum alloy dust
    addMixer(
        [
            '3x #forge:dusts/naquadria',
            '2x #forge:dusts/deorum',
            '2x #forge:dusts/trinium',
            '3x #forge:dusts/steadfast'
        ],
        '10x gtceu:deorum_alloy_dust',
        'UXV',
        500
    )

    //demonic alloy
    addMixer(
        [
            '#forge:singularities/vibrant_alloy',
            '3x #forge:dusts/demon',
            '3x #forge:dusts/tenebrium',
            '3x #forge:dusts/caesium',
            '3x #forge:dusts/tritanium',
            '3x #forge:dusts/gaia'


        ],
        '16x gtceu:demonic_alloy_dust',
        'opv',
        500
    )

    addMixer(
        [
            '2x #forge:dusts/naquamodium',
            '2x #forge:dusts/neutronium',
            '#forge:dusts/alloy_infused',
            '3x #forge:dusts/corrosive'
        ],
        '8x gtceu:alltheneutronium_dust',
        'UHV',
        500
    )

    addMixer(
        [
            '2x #forge:dusts/naquabranium',
            '2x #forge:dusts/alltheneutronium',
            '#forge:dusts/alloy_reinforced',
            '3x #forge:dusts/destructive'
        ],
        '8x gtceu:vibtronium_dust',
        'UEV',
        500
    )


    addMixer(
        [
            '2x #forge:dusts/naquatainium',
            '2x #forge:dusts/vibtronium',
            '#forge:dusts/alloy_atomic',
            '3x #forge:dusts/vengeful'
        ],
        '8x gtceu:unobtronium_dust',
        'UIV',
        500
    )

    //naquamodium
    addMixer(
        [
            '5x #forge:dusts/naquadah',
            '3x #forge:dusts/allthemodium'
        ],
        '8x gtceu:naquamodium_dust',
        'LuV',
        250
    );

    //naquabranium
    addMixer(
        [
            '5x #forge:dusts/naquadah',
            '3x #forge:dusts/vibranium'
        ],
        '8x gtceu:naquabranium_dust',
        'LuV',
        250
    );

    //naquatainium
    addMixer(
        [
            '5x #forge:dusts/naquadria',
            '3x #forge:dusts/unobtainium'
        ],
        '8x gtceu:naquatainium_dust',
        'LuV',
        250
    );

    //vibrant alloy
    addMixer(
        [
            '#forge:dusts/energetic_alloy',
            '#forge:dusts/ender_pearl'
        ],
        '2x gtceu:vibrant_alloy_dust',
        '2048',
        100
    );

    //conductive alloy
    addMixer(
        [
            '#forge:dusts/iron',
            '#forge:dusts/redstone'
        ],
        '2x gtceu:conductive_alloy_dust',
        '128',
        100
    );

    //pulsating alloy
    addMixer(
        [
            '#forge:dusts/iron',
            '#forge:dusts/ender_pearl'
        ],
        '2x gtceu:pulsating_alloy_dust',
        '2048',
        100
    );

    //energetic alloy
    addMixer(
        [
            '#forge:dusts/gold',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone'
        ],
        '2x gtceu:energetic_alloy_dust',
        '512',
        100
    );

    //soularium alloy
    addMixer(
        [
            '#forge:dusts/gold',
            'thermal_extra:soul_sand_dust'
        ],
        '2x gtceu:soularium_dust',
        '512',
        100
    );

    //copper alloy
    addMixer(
        [
            '#forge:dusts/copper',
            'gtceu:silicon_dust'
        ],
        '2x gtceu:copper_alloy_dust',
        '32',
        100
    );

    //dark steel 
    addMixer(
        [
            '#forge:dusts/steel',
            '#forge:dusts/carbon',
            '#forge:dusts/obsidian'
        ],
        '3x gtceu:dark_steel_dust',
        '512',
        100
    );

    //end steel
    addMixer(
        [
            '#forge:dusts/dark_steel',
            '#forge:dusts/endstone',
            '#forge:dusts/obsidian'
        ],
        '3x gtceu:end_steel_dust',
        '2048',
        100
    );

    //signalum
    addMixer(
        [
            '#forge:dusts/silver',
            '3x #forge:dusts/copper',
            '4x #forge:dusts/redstone'
        ],
        '8x alltheores:signalum_dust',
        '512',
        100
    );

    //lumium
    addMixer(
        [
            '#forge:dusts/silver',
            '3x #forge:dusts/tin',
            '2x #forge:dusts/glowstone'
        ],
        '6x alltheores:lumium_dust',
        '2048',
        100
    );

    //enderium
    addMixer(
        [
            '#forge:dusts/diamond',
            '3x #forge:dusts/lead',
            '2x #forge:dusts/ender_pearl'
        ],
        '6x alltheores:enderium_dust',
        '8192',
        100
    );

    //eternium
    addMixer(
        [
            '2x #forge:dusts/eternal',
            '4x #forge:dusts/sculk',
            '2x #forge:dusts/ferrognetic',
            '3x #forge:dusts/netherite',
            '5x #forge:dusts/neutronium'

        ],
        '16x gtceu:eternium_dust',
        'uhv',
        500
    )

    //cosmic alloy
    addMixer(
        [
            '3x #forge:dusts/cosmic_matter',
            '4x #forge:dusts/alfsteel',
            '3x #forge:dusts/americium',
            '2x #forge:dusts/naquadria',
            '2x #forge:dusts/nether_star'
        ],
        '14x gtceu:cosmic_alloy_dust',
        'uev',
        500
    )

    //dielectric paste
    allthemods.recipes.gtceu.mixer('gregification:dielectric_paste')
    .itemInputs(
        '4x #forge:dusts/carbon',            // Conductive base
        '4x #forge:dusts/clay',              // Ceramic base
        '2x #forge:dusts/obsidian'           // Dielectric reinforcement
    )
    .inputFluids('gtceu:rubber 144')    // EV Binder
    .itemOutputs('24x powah:dielectric_paste')
    .duration(200)
    .EUt(512);
});