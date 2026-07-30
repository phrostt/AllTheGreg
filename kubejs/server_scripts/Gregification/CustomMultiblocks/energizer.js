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
    
    const addEnergize = (inputs, output, energyFE, ID) => {

        let outputID2 = '';
        if (ID) { outputID2 = ID; }
        else { outputID2 = output.replace(/[^a-z0-9]/gi, '_'); }

        const totalEU = energyFE * 4;
        const voltage = 8192;
        const duration = Math.max(1, Math.floor(totalEU / voltage));

        allthemods.recipes.gtceu.industrial_energizer(`gregification:energizer/${outputID2}`)
            .itemInputs(inputs)
            .itemOutputs(output)
            .EUt(voltage)
            .duration(duration);
    };

    addEnergize(
        ['#forge:ingots/iron', '#forge:ingots/gold'],
        '2x powah:steel_energized',
        100000
    );

    addEnergize(
        ['#forge:storage_blocks/iron', '#forge:storage_blocks/gold'],
        '2x powah:energized_steel_block',
        900000
    );

    addEnergize(
        'minecraft:blaze_rod',
        'powah:crystal_blazing',
        200000
    );

    addEnergize(
        '4x #forge:dusts/blaze',
        'powah:crystal_blazing',
        200000,
        'blazing_crystal_from_rod'
    );

    addEnergize(
        '#forge:storage_blocks/blaze_mesh',
        'powah:blazing_crystal_block',
        1800000
    );

    addEnergize(
        'minecraft:diamond',
        'powah:crystal_niotic',
        300000
    );

    addEnergize(
        '#forge:storage_blocks/diamond',
        'powah:niotic_crystal_block',
        2700000
    );

    addEnergize(
        'minecraft:emerald',
        'powah:crystal_spirited',
        400000
    );

    addEnergize(
        '#forge:storage_blocks/emerald',
        'powah:spirited_crystal_block',
        3600000
    );

    addEnergize(
        ['4x powah:blazing_crystal_block', '8x #forge:storage_blocks/redstone', '4x minecraft:nether_star'],
        '64x powah:crystal_nitro',
        2000000
    );

    addEnergize(
        '#forge:ores/uraninite',
        '10x powah:uraninite',
        100000
    );

    addEnergize(
        '#forge:raw_materials/uraninite',
        '2x powah:uraninite',
        10000
    );

    addEnergize(
        '#forge:ingots/uranium',
        'powah:uraninite',
        30000
    );

    addEnergize(
        '#forge:storage_blocks/uranium',
        '9x powah:uraninite',
        270000
    );

    addEnergize(
        'ae2:certus_quartz_crystal',
        'ae2:charged_certus_quartz_crystal',
        20000
    );

    addEnergize(
        '2x minecraft:blue_ice',
        'powah:dry_ice',
        10000
    );

    addEnergize(
        'minecraft:snowball',
        'powah:charged_snowball',
        10000
    );

    addEnergize(
        ['minecraft:ender_eye', 'powah:dielectric_casing', 'powah:capacitor_basic_tiny'],
        'powah:ender_core',
        50000
    );

    //creative
    addEnergize(
        ['create:flywheel', 'allthetweaks:atm_star', 'createaddition:alternator'],
        'createaddition:creative_energy',
        10000000
    );

    addEnergize(
        ['4x integrateddynamics:energy_battery', 'allthetweaks:atm_star'],
        'integrateddynamics:energy_battery_creative',
        10000000
    );

    addEnergize(
        ['4x mekanism:creative_energy_cube', 'allthetweaks:atm_star'],
        Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'),
        10000000,
        'mekanism_creative_energy_cube'
    );

    addEnergize(
        ['4x megacells:mega_energy_cell', 'allthetweaks:atm_star'],
        'ae2:creative_energy_cell',
        10000000
    );

    addEnergize(
        ['4x powah:energy_cell_nitro', 'allthetweaks:atm_star'],
        'powah:energy_cell_creative',
        10000000
    );

    

    //atm alloys
    addEnergize(
        ['allthemodium:allthemodium_block', 'allthemodium:unobtainium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_allthemodium_alloy_block',
        5000000
    );

    addEnergize(
        ['allthemodium:allthemodium_block', 'allthemodium:vibranium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:vibranium_allthemodium_alloy_block',
        5000000
    );

    addEnergize(
        ['allthemodium:unobtainium_block', 'allthemodium:vibranium_block', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_vibranium_alloy_block',
        5000000
    );

    addEnergize(
        ['allthemodium:allthemodium_ingot', 'allthemodium:unobtainium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_allthemodium_alloy_ingot',
        5000000
    );

    addEnergize(
        ['allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:vibranium_allthemodium_alloy_ingot',
        5000000
    );

    addEnergize(
        ['allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:piglich_heart_block'],
        'allthemodium:unobtainium_vibranium_alloy_ingot',
        5000000
    );

    //bees
    addEnergize(
        [beeSpirited.withCount(2), beeRedstone, beeBlazingCrystal, '2x powah:nitro_crystal_block'],
        beeNitro,
        2000000,
        'nitro_bee'
    );

    addEnergize(
        [beeBlazingCrystal.withCount(2), beeDiamond, '2x powah:niotic_crystal_block'],
        beeNiotic,
        2000000,
        'niotic_bee'
    );

    addEnergize(
        [beeNiotic.withCount(2), beeEmerald, '2x powah:spirited_crystal_block'],
        beeSpirited,
        2000000,
        'spirit_bee'
    );

    addEnergize(
        [beeIron.withCount(2), beeGold, '2x powah:energized_steel_block'],
        beeEnergized,
        2000000,
        'energized_bee'
    );

    addEnergize(
        [beeEnergized.withCount(2), beeBlazing, '2x powah:blazing_crystal_block'],
        beeBlazingCrystal,
        2000000,
        'blazing_crystal_bee'
    );
});