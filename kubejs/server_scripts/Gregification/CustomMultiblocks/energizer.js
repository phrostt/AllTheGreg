ServerEvents.recipes(allthemods => {

    const beeRedstone = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:redstone"}}').strongNBT();
    const beeSpirited = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:spirited_crystal"}}').strongNBT();
    const beeBlazingCrystal = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:blazing_crystal"}}').strongNBT();
    const beeBlazing = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:blazing"}}').strongNBT();
    const beeNitro = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:nitro_crystal"}}').strongNBT();
    const beeDiamond = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:diamond"}}').strongNBT();
    const beeNiotic = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:niotic_crystal"}}').strongNBT();
    const beeEnergized = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:energized_steel"}}').strongNBT();
    const beeEmerald = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:emerald"}}').strongNBT();
    const beeIron = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iron"}}').strongNBT();
    const beeGold = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:gold"}}').strongNBT();

    const tempTiers = [1800, 2700, 3600, 4500, 5400, 7200, 9001, 10800];
    const voltages = [32, 128, 512, 2048, 8192, 32768, 131072, 524288];

    const addEnergize = (inputs, output, energyFE, tier, ID) => {

        const outputID = ID ? ID : output.replace(/[^a-z0-9]/gi, '_'); 

        const totalEU = energyFE * 4;        
        const duration = Math.max(1, Math.floor(totalEU / 32));
        
        allthemods.recipes.gtceu.industrial_energizer(`gregification:energizer/${outputID}`)
            .itemInputs(inputs)
            .itemOutputs(output)
            .EUt(voltages[tier])
            .duration(duration)
            .addData('ebf_temp', tempTiers[tier]);
    };

    addEnergize(
        ['#forge:ingots/iron', '#forge:ingots/gold'],
        '2x powah:steel_energized',
        100000,
        0
    );

    addEnergize(
        ['#forge:storage_blocks/iron', '#forge:storage_blocks/gold'],
        '2x powah:energized_steel_block',
        900000,
        0
    );

    addEnergize(
        'minecraft:blaze_rod',
        'powah:crystal_blazing',
        200000,
        1
    );

    addEnergize(
        '4x #forge:dusts/blaze',
        'powah:crystal_blazing',
        200000,        
        1,'blazing_crystal_from_rod',
    );

    addEnergize(
        '#forge:storage_blocks/blaze_mesh',
        'powah:blazing_crystal_block',
        1800000,
        1
    );

    addEnergize(
        'minecraft:diamond',
        'powah:crystal_niotic',
        300000,
        2
    );

    addEnergize(
        '#forge:storage_blocks/diamond',
        'powah:niotic_crystal_block',
        2700000,
        2
    );

    addEnergize(
        'minecraft:emerald',
        'powah:crystal_spirited',
        400000,
        3
    );

    addEnergize(
        '#forge:storage_blocks/emerald',
        'powah:spirited_crystal_block',
        3600000,
        3
    );

    addEnergize(
        ['4x powah:blazing_crystal_block', '8x #forge:storage_blocks/redstone', '4x minecraft:nether_star'],
        '64x powah:crystal_nitro',
        2000000,
        4
    );

    addEnergize(
        '#forge:ores/uraninite',
        '10x powah:uraninite',
        100000,
        0
    );

    addEnergize(
        '#forge:raw_materials/uraninite',
        '2x powah:uraninite',
        10000,
        0
    );

    addEnergize(
        '#forge:ingots/uranium',
        'powah:uraninite',
        30000,
        0
    );

    addEnergize(
        '#forge:storage_blocks/uranium',
        '9x powah:uraninite',
        270000,
        0
    );

    addEnergize(
        'ae2:certus_quartz_crystal',
        'ae2:charged_certus_quartz_crystal',
        20000,
        0
    );

    addEnergize(
        '2x minecraft:blue_ice',
        'powah:dry_ice',
        10000,
        0
    );

    addEnergize(
        'minecraft:snowball',
        'powah:charged_snowball',
        10000,
        0
    );

    addEnergize(
        ['minecraft:ender_eye', 'powah:dielectric_casing', 'powah:capacitor_basic_tiny'],
        'powah:ender_core',
        50000,
        0
    );




    //atm alloys
    addEnergize(
        ['allthemodium:allthemodium_block', 'allthemodium:unobtainium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_allthemodium_alloy_block',
        5000000,
        6
    );

    addEnergize(
        ['allthemodium:allthemodium_block', 'allthemodium:vibranium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:vibranium_allthemodium_alloy_block',
        5000000,
        6
    );

    addEnergize(
        ['allthemodium:unobtainium_block', 'allthemodium:vibranium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_vibranium_alloy_block',
        5000000,
        6
    );

    addEnergize(
        ['allthemodium:allthemodium_ingot', 'allthemodium:unobtainium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_allthemodium_alloy_ingot',
        5000000,
        6
    );

    addEnergize(
        ['allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:vibranium_allthemodium_alloy_ingot',
        5000000,
        6
    );

    addEnergize(
        ['allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_vibranium_alloy_ingot',
        5000000,
        6
    );

    //bees
    addEnergize(
        [beeSpirited.withCount(2), beeRedstone, beeBlazingCrystal, '2x powah:nitro_crystal_block'],
        beeNitro,
        2000000,
        6,
        'nitro_bee'
    );

    addEnergize(
        [beeBlazingCrystal.withCount(2), beeDiamond, '2x powah:niotic_crystal_block'],
        beeNiotic,
        2000000,
        6,
        'niotic_bee'
    );

    addEnergize(
        [beeNiotic.withCount(2), beeEmerald, '2x powah:spirited_crystal_block'],
        beeSpirited,
        2000000,
        6,
        'spirited_bee'
    );

    addEnergize(
        [beeIron.withCount(2), beeGold, '2x powah:energized_steel_block'],
        beeEnergized,
        2000000,
        6,
        'energized_bee'
    );

    addEnergize(
        [beeEnergized.withCount(2), beeBlazing, '2x powah:blazing_crystal_block'],
        beeBlazingCrystal,
        2000000,
        6,
        'blazing_bee'
    );



    const addAssembler = (inputs, output, fluid, duration, eu, rID) => {
        let firstOutput = Array.isArray(output) ? output[0] : output;
        let generatedId = rID || `gregification:${firstOutput.toString().replace(/^\d+[x ]\s*/, '').split(':').pop().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase()}`;
        let recipe = allthemods.recipes.gtceu.assembler(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluid) {
            recipe.inputFluids(fluid);
        }
    };

    const capacitors = [
        {tier: 'basic', voltage: 'lv', mat: '#forge:plates/steel', capacitor: ''}, 
        {tier: 'hardened', voltage: 'mv', mat: '#forge:plates/energized_steel', capacitor: ''}, 
        {tier: 'blazing', voltage: 'hv', mat: '#forge:plates/blazing_crystal', capacitor: 'smd_'}, 
        {tier: 'niotic', voltage: 'ev', mat: '#forge:plates/niotic_crystal', capacitor: 'smd_'}, 
        {tier: 'spirited', voltage: 'iv', mat: '#forge:plates/spirited_crystal', capacitor: 'advanced_smd_'}, 
        {tier: 'nitro', voltage: 'luv', mat: '#forge:plates/nitro_crystal', capacitor: 'advanced_smd_'}
    ];
    capacitors.forEach((tier, index) => {
        
        
        addAssembler(
        [
            `4x gtceu:${tier.capacitor}capacitor`,
            `4x ${tier.mat}`,
            '4x powah:dielectric_paste',
            `#gtceu:circuits/${tier.voltage}`
        ],
        `powah:capacitor_${tier.tier}`,
        null,
        index*100,
        voltages[index]
    )
    });    


});