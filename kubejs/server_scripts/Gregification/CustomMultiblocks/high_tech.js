const TIME = {
    short: 600,
    medium: 800,
    long: 1000,
    very_long: 1200
};

const $ResearchManager = Java.loadClass('com.gregtechceu.gtceu.utils.ResearchManager');

ServerEvents.recipes(allthemods => {
    let t = GTRecipeTypes.get('prototype_assembler');
    if (t) {
        t.setHasResearchSlot(true);
        t.onRecipeBuild((b, p) => $ResearchManager.createDefaultResearchRecipe(b, p));
    } else {
        console.error('prototype_assembler type still null in ServerEvents.recipes!');
    }

    const gtRecipe = (recipeType, inputs, fluidIn, outputs, fluidOut, eu, duration, temp, customID, program) => {
        let generatedId = customID || `gregification:${outputs[0].replace(/^\d+x\s+/, '').replace(':', '_')}`;

        let recipe = allthemods.recipes.gtceu[recipeType](generatedId)
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

        return recipe;
    };


    const elements = ['fire', 'water', 'air', 'earth'];
    elements.forEach(element => {
        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:${element}crystal`,
            ],
            '#forge:water_stage_2 250',
            `elementalcraft:crude_${element}_gem`,
            null,
            2048,
            300,
            3600,
            `gregification:crude_${element}_gem`
        );

        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:crude_${element}_gem`,
            ],
            '#forge:water_stage_3 250',
            `elementalcraft:fine_${element}_gem`,
            null,
            2048,
            300,
            4500,
            `gregification:fine_${element}_gem`
        );

        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:fine_${element}_gem`,
            ],
            '#forge:water_stage_4 250',
            `elementalcraft:pristine_${element}_gem`,
            null,
            2048,
            300,
            5400,
            `gregification:pristine_${element}_gem`
        );
    });


    const gtRecipeResearch = (recipeType, outputs, inputs, fluids, duration, eu, researchItem, CWUt, customID) => {

        let generatedId = customID || `gregification:${outputs[0].replace(/^\d+x\s+/, '').replace(':', '_')}`;
        let recipe = allthemods.recipes.gtceu[recipeType](generatedId)
            .itemOutputs(outputs)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids){
            recipe.inputFluids(fluids);
        }
        
        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)
                        .EUt(eu / 4)
                        .CWUt(CWUt)                        
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }        
    };




    //chaos shard crystal_growth_chamber recipe

    allthemods.recipes.gtceu.magnetic_containment_chamber('gregification:concentrated_dark_matter_synthesis')
        .itemInputs('#forge:dusts/caesium', '2x gtceu:plutonic_quark')
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

    allthemods.shapeless('gtceu:blueprint_blank', ['minecraft:paper', '#forge:small_dusts/lapis']).id('gregification:blank_blueprint')

    /*allthemods.recipes.gtceu.prototype_assembler('gregification:test')
            .itemInputs(drone)
            .chancedOutput('allthemodium:unobtainium_upgrade_smithing_template', 1500, 500)
            .inputFluids('#forge:kerosene 4000')
            .duration(10000)
            .EUt(524288)
            .circuit(13);

    allthemods.recipes.gtceu.prototype_assembler('gregification:mekasuit_helmet_test')
        .itemOutputs('mekanism:mekasuit_helmet')
        .itemInputs([
            'allthemodium:unobtainium_helmet',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '5x mekanism:hdpe_sheet',
            '5x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '5x #forge:dense_plates/gaia',
            '5x #forge:plates/kevlar'
        ])
        .inputFluids('#forge:europium 720')
        .duration(6000)
        .EUt(131072)
        .stationResearch(b => b
            .researchStack('gtceu:blueprint_mekasuit')
            .EUt(131072 / 4)
            .CWUt(16)
        );
    */
    const createModelBlueprints = (machineID, creature, BPitemID, output, inputs, fluids, duration, EUt, CWU, customID, skipBlueprints) => {
        const scanEU = 8192;
        const scanDuration = 200;
        const fraculatorEU = 131072;
        const fraculatorDuration = 600;
        const generatedId = customID || `gregification:${output[0].replace(/^\d+x\s+/, '').replace(':', '_')}`;
        const creativeBlueprint = `gtceu:blueprint_${BPitemID}`;

        if (!skipBlueprints) {
            
            //self aware model
            const model = Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${creature}"}}`).strongNBT();
            
            //model predicate for scanner
            const modelPredicate = NBTPredicates.all(
                NBTPredicates.eqString('data_model.id', `hostilenetworks:${creature}`),
                NBTPredicates.gte('data_model.data', 1254)
            );
            
            
            let createDisplayParts = creature.split('_');
            let createDisplay = '';
            for (let i = 0; i < createDisplayParts.length; i++) {
                createDisplay += createDisplayParts[i].charAt(0).toUpperCase() + createDisplayParts[i].slice(1);
                if (i < createDisplayParts.length - 1) createDisplay += ' ';
            }
            //datastick from scanning the certificate
            const modelCertificate = Item.of('gtceu:stem_cells', `{certificate:{id:"hostilenetworks:${creature}"}}`)
                .withName(Text.of(`${createDisplay} Neurons`).red())
                .withLore([
                    Text.of(`Self-Aware ${createDisplay} Neurons`).gold(),
                    Text.of('These neurons have been certified by the').white(),
                    Text.of('Hostile Networks Corporation.').white(),
                    Text.of('It is guaranteed to be self-aware').white(),
                ]).strongNBT();

            //datastick from scanner
            allthemods.recipes.gtceu.scanner(`${generatedId}_scanner`)
                .inputItemNbtPredicate(model, modelPredicate)
                .itemOutputs(modelCertificate)
                .duration(scanDuration)
                .EUt(scanEU);
            

            //datastick + blank blueprint for item blueprint
            allthemods.recipes.gtceu.psycho_fraculator(`${generatedId}_fraculation`)
                .itemInputs('gtceu:blueprint_blank')
                .notConsumable(modelCertificate)
                .chancedOutput(creativeBlueprint, 500, 500)
                .inputFluids('#forge:mind_control_serum 100')
                .duration(fraculatorDuration)
                .EUt(fraculatorEU);
        };        
                               
        gtRecipeResearch(
            machineID,
            output,
            inputs,
            fluids,
            duration,
            EUt,
            creativeBlueprint,
            CWU,
            customID
        );        
    };

    

    

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_helmet'],
        [
            'allthemodium:unobtainium_helmet',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '5x mekanism:hdpe_sheet',
            '5x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '5x #forge:dense_plates/gaia',
            '5x #forge:plates/kevlar'
        ],
        '#forge:europium 720',
        6000,
        131072,
        16
    );
   
    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_bodyarmor'],
        [
            'allthemodium:unobtainium_chestplate',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '8x mekanism:hdpe_sheet',
            '8x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '8x #forge:dense_plates/gaia',
            '8x #forge:plates/kevlar'
        ],
        '#forge:europium 1152',
        6000,
        131072,
        16,null,true
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_pants'],
        [
            'allthemodium:unobtainium_leggings',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '7x mekanism:hdpe_sheet',
            '7x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '7x #forge:dense_plates/gaia',
            '7x #forge:plates/kevlar'
        ],
        '#forge:europium 1008',
        6000,
        131072,
        16,null,true
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_boots'],
        [
            'allthemodium:unobtainium_boots',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '4x mekanism:hdpe_sheet',
            '4x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '4x #forge:dense_plates/gaia',
            '4x #forge:plates/kevlar'
        ],
        '#forge:europium 576',
        6000,
        131072,
        16,null,true
    );

    createModelBlueprints('prototype_assembler', 'zombie', 'mob_swab', ['mob_grinding_utils:mob_swab'],
        [
            '#forge:rods/long/fireite',
            '2x gtceu:eldritch_cloth'
        ],
        null,
        600,
        131072
    );

    createModelBlueprints('prototype_assembler', 'ender_dragon', 'creative_container', ['elementalcraft:creative_container'],
        [
            'elementalcraft:container',
            'gtceu:element_fire',
            'gtceu:element_air',
            'gtceu:element_water',
            'gtceu:element_earth',
            'allthetweaks:atm_star'
        ],
        null,
        6000,
        131072,
        32
    );

    let elementHolder;
    elements.forEach(element => {
        elementHolder = Item.of('elementalcraft:creative_container', `{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"${element}"}}}`).strongNBT();
        gtRecipeResearch(
            'assembly_line',
            [elementHolder],
            [
                'elementalcraft:creative_container',
                `64x elementalcraft:pristine_${element}_gem`
            ],
            null,
            6000,
            131072,
            'elementalcraft:creative_container',
            32,
            `gregification:creative_container_${element}`
        );
    })
});
