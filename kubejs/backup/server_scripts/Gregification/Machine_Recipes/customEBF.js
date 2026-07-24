// @ts-nocheck
// priority: -1000
ServerEvents.recipes(allthemods => {

    const addEBF = (itemsIn, fluidIn, itemsOut, fluidOut, temp, duration, eu) => {
        const source = Array.isArray(itemsOut) ? itemsOut[0] : itemsOut;
        const outputID = String(source || "unknown").replace(/[^a-z0-9]/gi, '_');
        //const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.electric_blast_furnace(`gregification:blasting/${outputID}_blasting`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .blastFurnaceTemp(temp)
            .duration(duration)
            .EUt(eu);

        if (fluidIn) { recipe.inputFluids(fluidIn) }
        if (fluidOut) { recipe.outputFluids(fluidOut) }
    };

   

    // EBF


    //steel
    addEBF(
        ['#forge:ingots/iron', '2x #forge:dusts/coal'], // or charcoal
        null,
        'alltheores:steel_ingot',
        null,
        2800,
        400,
        512
    );

    //red alloy ingot
    addEBF(
        ['2x minecraft:redstone', '#forge:silicon'],
        null,
        'gtceu:red_alloy_ingot',
        null,
        1000,
        400,
        128
    );

    addEBF(
        ['4x #forge:dusts/cerium','64x #forge:dusts/silicon'],
        ['gtceu:germanium_tetrachloride 1000'],
        ['gtceu:germanium_boule', '6x gtceu:cerium_chloride_dust'],
        null,
        12600,
        9000,
        131072
    )

    addEBF(
        ['16x gtceu:empowered_polymer_dust', '4x #forge:ingots/draconium_awakened', '4x #forge:dusts/enriched_naquadah'],
        null,
        'gtceu:empowered_boule',
        null,
        12600,
        9000,
        524288
    );


    addEBF(
        ['16x gtceu:caesium_dust', '4x #forge:ingots/hop_graphite', '64x #forge:dusts/silicon'],
        null,
        'gtceu:atomic_boule',
        null,
        12600,
        9000,
        131072
    );

    //sky steel
    addEBF(
        ['#forge:ingots/iron', 'ae2:sky_stone_block', 'ae2:charged_certus_quartz_crystal'],
        'minecraft:lava 1000',
        '2x megacells:sky_steel_ingot',
        null,
        3600,
        400,
        512
    );

    //sky insulated resin
    addEBF(
        ['appflux:redstone_crystal', 'ae2:sky_stone_block', 'appflux:harden_insulating_resin'],
        'minecraft:lava 1000',
        '2x appflux:sky_harden_insulating_resin',
        null,
        3600,
        400,
        512
    );

});