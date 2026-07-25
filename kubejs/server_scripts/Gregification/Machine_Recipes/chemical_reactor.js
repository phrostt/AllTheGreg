//@ts-check
const tier = {
    ULV: 8,
    LV: 32,
    MV: 128,
    HV: 512,
    EV: 2048,
    IV: 8192,
    LuV: 32768,
    ZPM: 131072,
    UV: 524288,
    UHV: 2097152,
    UEV: 8388608,
    UIV: 33554432,
    UXV: 134217728,
    OpV: 536870912,
    MAX: 2147483647
};
ServerEvents.recipes(allthemods => {

    const addChemical = (itemsIn, fluidsIn, itemsOut, fluidsOut, eu, duration, rID, program) => {

        let recipe = allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/${rID}`)

        if (itemsOut) { recipe.itemOutputs(itemsOut) }
        if (fluidsOut) { recipe.outputFluids(fluidsOut) }
        if (itemsIn) { recipe.itemInputs(itemsIn) }
        if (fluidsIn) { recipe.inputFluids(fluidsIn) }
        recipe.duration(duration)
        recipe.EUt(tier[eu]);
        if (program) {
            recipe.circuit(program)
        }

    };


    addChemical(
        'gtceu:atm_star_dust',
        [
            'gtceu:fluoroantimonic_acid 1000',
            'gtceu:diethylenetriamine_pentaacetonitrile 1000',
            'gtceu:liquid_chaos 1000'
        ],
        null,
        'gtceu:chaos_plastic 11520',
        'IV',
        6000,
        'chaos_plastic'
    );

    addChemical(
        [
            '2x #forge:dusts/carbon',
            '#forge:dusts/germanium'
        ],
        [
            'gtceu:chlorine 4000'
        ],
        null,
        [
            'gtceu:carbon_monoxide 2000',
            'gtceu:germanium_tetrachloride 1000'
        ],
        'IV',
        200,
        'germanium_tetrachloride'
    );

    addChemical(
        [
            '3x gtceu:cerium_chloride_dust',
            '2x #forge:dusts/sodium'
        ],
        null,
        [
            'gtceu:cerium_dust',
            '4x gtceu:salt_dust'
        ],
        null,
        'IV',
        200,
        'cerium_reprocessing'
    );

    addChemical('#forge:seeds', '#forge:seed_oil 1000', null, 'gtceu:refined_seed_oil 1000', 'EV', 600, 'seed_oil')
    addChemical('gtceu:crystallized_seed', 'gtceu:refined_seed_oil 1000', null, 'gtceu:crystallized_oil 1000', 'EV', 600, 'refined_seed_oil')
    addChemical('gtceu:empowered_seed', 'gtceu:crystallized_oil 1000', null, 'gtceu:empowered_oil 1000', 'EV', 600, 'empowered_seed_oil')

    allthemods.recipes.gtceu.large_chemical_reactor('saturated_life_fertilizer')
        .inputFluids('gtceu:liquid_fertilizer 250','gtceu:sanguine_concentrate 250')
        .outputFluids('gtceu:saturated_life_fertilizer 500')
        .duration(100)
        .EUt(512);
    
    allthemods.recipes.gtceu.chemical_reactor('gregification:super_coolant')
        .itemInputs('ad_astra:ice_shard', '#forge:dusts/blue_ice')
        .inputFluids('#forge:blue_ice 1000')
        .outputFluids('gtceu:super_coolant 1000')
        .duration(500)
        .EUt(512);
});