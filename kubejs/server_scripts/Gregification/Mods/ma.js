ServerEvents.recipes(allthemods => {
    const addMA = (itemsIn, fluidIn, itemsOut, eu, duration, rID) => {        
        const outputID = rID || itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.awakening_altar(`allthemods:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
    };

    const essences = ['fire','water','air', 'earth']
    essences.forEach(essence => {
        let recipe = allthemods.recipes.gtceu.extractor(`allthemods:extractor/${essence}`)
            .itemInputs(`#forge:gems/${essence}_essence`)
            .outputFluids(`gtceu:${essence}_essence 10`)
            .duration(300)
            .EUt(128);        
    });
    

    const supremiumBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:supremium"}}').strongNBT();
    const awakenedSupremiumBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened_supremium"}}').strongNBT();
    const sItems = ['scythe', 'axe', 'boots', 'chestplate', 'bow', 'furnace', 'sword', 'shovel', 'sickle', 'leggings', 'hoe', 'shears', 'fishing_rod', 'crossbow', 'helmet', 'pickaxe', 'upgrade'];


    let quantity = 32000;
    let quantity2 = 128000;
    sItems.forEach(item => {
        addMA(
            [
                `2x mysticalagriculture:awakened_supremium_gemstone`,
                `2x mysticalagriculture:awakened_supremium_ingot`,
                `mysticalagriculture:supremium_${item}`
            ],
            [
                `#forge:fire_essence ${quantity}`,
                `#forge:water_essence ${quantity}`,
                `#forge:air_essence ${quantity}`,
                `#forge:earth_essence ${quantity}`
            ],
            `mysticalagriculture:awakened_supremium_${item}`,
            8192,
            200
        )
    });

    addMA(
            [
                `2x mysticalagriculture:awakened_supremium_gemstone`,
                `2x mysticalagriculture:awakened_supremium_ingot`,
                `mysticalagradditions:supremium_paxel`
            ],
            [
                `#forge:fire_essence ${quantity}`,
                `#forge:water_essence ${quantity}`,
                `#forge:air_essence ${quantity}`,
                `#forge:earth_essence ${quantity}`
            ],
            `mysticalagradditions:awakened_supremium_paxel`,
            8192,
            200
        );

    
    addMA(
        [
            supremiumBee,
        ],
        [
            `#forge:fire_essence ${quantity2}`,
            `#forge:water_essence ${quantity2}`,
            `#forge:air_essence ${quantity2}`,
            `#forge:earth_essence ${quantity2}`
        ],        
        awakenedSupremiumBee,
        8192,
        200,
        'awakened_supremeium_bee'
    );

    addMA(
        [            
            '4x mysticalagriculture:cognizant_dust',
            '#forge:storage_blocks/supremium_essence'
        ],        
        [
            `#forge:fire_essence ${quantity2}`,
            `#forge:water_essence ${quantity2}`,
            `#forge:air_essence ${quantity2}`,
            `#forge:earth_essence ${quantity2}`
        ],        
        'mysticalagriculture:awakened_supremium_block',
        8192,
        200
    );

    const awakenedBlock = Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
    addMA(
        [            
            '2x #forge:storage_blocks/vibranium',
            '2x #forge:storage_blocks/unobtainium',
            'allthemodium:unobtainium_vibranium_alloy_block'
        ],        
        [
            `#forge:fire_essence ${quantity2}`,
            `#forge:water_essence ${quantity2}`,
            `#forge:air_essence ${quantity2}`,
            `#forge:earth_essence ${quantity2}`
        ],        
        awakenedBlock,
        8192,
        200,
        'awakened_unobtainium_vibranium_alloy_block'
    );
    
    addMA(
        [            
            '32x #forge:singularities/fiery',
            '32x #forge:singularities/steeleaf',
            '32x #forge:singularities/carminite',
            '32x #forge:singularities/knightmetal',
        ],        
        [
            `#forge:fire_essence ${quantity2}`,
            `#forge:water_essence ${quantity2}`,
            `#forge:air_essence ${quantity2}`,
            `#forge:earth_essence ${quantity2}`
        ],        
        'twilightforest:twilight_portal_miniature_structure',
        8192,
        200
    );

    allthemods.shaped(
        'gtceu:seed_fabricator',
        [
            'CPC',
            'PHV',
            'CPC'
        ],
        {
            C: '#gtceu:circuits/hv',
            H: 'gtceu:hv_machine_hull',
            P: '#forge:plates/stainless_steel',
            V: 'mysticalagriculture:infusion_altar'
        }
    )

    allthemods.shaped(
        'gtceu:awakening_altar',
        [
            'IVI',
            'CHC',
            'IPI'
        ],
        {
            C: '#gtceu:circuits/luv',
            H: 'gtceu:luv_machine_hull',
            P: 'gtceu:luv_electric_pump',
            I: '#forge:plates/iridium',
            V: 'mysticalagriculture:awakening_altar'
        }
    )

    let  Clostridium = Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"Clostridium"}').strongNBT();

    allthemods.recipes.gtceu.mixer(`allthemods:gregification/assembler/red_fertilizer_x4`)
        .itemInputs(Clostridium, '#forge:dusts/phosphorus_pentoxide', '#forge:dusts/calcium_nitrate', '#forge:dusts/thallium_sulfate', '#forge:dusts/potassium_carbonate')
        .itemOutputs('4x farmingforblockheads:red_fertilizer')
        .inputFluids('#forge:liquid_fertilizer 1000')
        .duration(120)
        .EUt(512);

    // better recipe
    allthemods.recipes.gtceu.mixer(`allthemods:gregification/assembler/red_fertilizer_16x`)
        .itemInputs(Clostridium, '#forge:dusts/phosphorus_pentoxide', '#forge:dusts/calcium_nitrate', '#forge:dusts/thallium_sulfate', '#forge:dusts/potash', '#forge:dusts/iron_hydroxide')
        .itemOutputs('16x farmingforblockheads:red_fertilizer')
        .inputFluids('#forge:liquid_fertilizer 1000')
        .duration(120)
        .EUt(2048);

    //esences
    essences.forEach(essence => {
        allthemods.recipes.gtceu.gem_polisher(`${essence}_to_shard`)
            .itemInputs(`#forge:gems/${essence}_essence`)
            .chancedInput('gtceu:polishing_wheel', 1000, 0)
            .inputFluids('gtceu:distilled_water 288')
            .itemOutputs(`elementalcraft:${essence}_shard`)
            .duration(150)
            .EUt(512);
    });
    
});