const TIME = {
    short: 600,
    medium: 800,
    long: 1000,
    very_long: 1200
};
ServerEvents.recipes(allthemods => {
    const bacterialVat = (inputs, fluidIn, outputs, fluidOut, eu, duration, temp, customID, program) => {
        let id;
        if (customID) {
            id = `gregification:bacterial_vat/${customID}`;
        } else {
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:bacterial_vat/${outputName}`;
        }
        let recipe = allthemods.recipes.gtceu.bacterial_vat(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)                    
            .addData('ebf_temp', temp)
            .EUt(eu);
        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }        
    };
    

    //chaos shard crystal_growth_chamber recipe

    allthemods.recipes.gtceu.magnetic_containment_chamber('gregification:concentrated_dark_matter_synthesis')
        .itemInputs('#forge:dusts/caesium')
        .inputFluids('#forge:purest_water 1000')
        .outputFluids('gtceu:concentrated_dark_matter 10')
        .duration(10000)
        .EUt(524296);

    
    const drone = Item.of('pneumaticcraft:collector_drone', 4, '{"pneumaticcraft:air":120000}').strongNBT();
    
    allthemods.recipes.gtceu.drone_station('gregification:tier_1_rocket_schematic_from_drone')
        .itemInputs(drone)
        .chancedOutput('gtceu:tier_1_rocket_schematic', 1500, 500)
        .inputFluids('#forge:kerosene 4000')
        .duration(10000)
        .EUt(8192)
        .circuit(1);
    
    allthemods.recipes.gtceu.drone_station('gregification:tier_2_rocket_schematic_from_drone')
        .itemInputs(drone)
        .chancedOutput('gtceu:tier_2_rocket_schematic', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(32768)
        .circuit(2);
    
    allthemods.recipes.gtceu.drone_station('gregification:tier_3_rocket_schematic_from_drone')
        .itemInputs(drone)
        .chancedOutput('gtceu:tier_3_rocket_schematic', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(131072)
        .circuit(3);
    
    allthemods.recipes.gtceu.drone_station('gregification:tier_4_rocket_schematic_from_drone')
        .itemInputs(drone)
        .chancedOutput('gtceu:tier_4_rocket_schematic', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(524288)
        .circuit(4);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('gregificatoion:hydro_electromagnetic_separator/chaos_shards')
        .itemInputs('#forge:dusts/chaotic')
        .inputFluids('gtceu:water_stage_6 100')
        .chancedOutput('draconicevolution:small_chaos_frag', 5000, 500)                
        .duration(400)
        .EUt(524288);


    allthemods.recipes.gtceu.drone_station('gregification:allthemodium_upgrade')
        .itemInputs(drone, '32x #forge:storage_blocks/allthemodium')
        .chancedOutput('allthemodium:allthemodium_upgrade_smithing_template', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(32768)
        .circuit(11);  

    allthemods.recipes.gtceu.drone_station('gregification:vibranium_upgrade')
        .itemInputs(drone, '32x #forge:storage_blocks/vibranium')
        .chancedOutput('allthemodium:vibranium_upgrade_smithing_template', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(131072)
        .circuit(12);
    
    allthemods.recipes.gtceu.drone_station('gregification:unobtainium_upgrade')
        .itemInputs(drone, '32x #forge:storage_blocks/unobtainium')
        .chancedOutput('allthemodium:unobtainium_upgrade_smithing_template', 1500, 500)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(524288)
        .circuit(13);

    
    allthemods.recipes.gtceu.drone_station('gregification:forbidden_search')
        .itemInputs(drone, 'forbidden_arcanus:dark_nether_star')
        .chancedOutput('forbidden_arcanus:artisan_relic', 100, 500)
        .chancedOutput('forbidden_arcanus:crescent_moon', 100, 500)
        .chancedOutput('forbidden_arcanus:crimson_stone', 100, 500)
        .chancedOutput('forbidden_arcanus:elementarium', 100, 500)
        .chancedOutput('forbidden_arcanus:divine_pact', 100, 500)
        .chancedOutput('forbidden_arcanus:maledictus_pact', 100, 500)
        .inputFluids('#forge:kerosene 10000')
        .duration(10000)
        .EUt(32768)
        .circuit(5);
});