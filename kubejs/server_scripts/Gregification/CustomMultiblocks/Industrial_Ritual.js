ServerEvents.recipes(allthemods => {
    
    allthemods.shaped('gtceu:industrial_ritual_machine', ['SCS', 'PMP', 'SCS'], {
        S: 'gtceu:steel_plate',             // Now matches the Solid Steel Casings
        C: '#gtceu:circuits/hv',         
        P: 'gtceu:hv_electric_pump',
        M: 'gtceu:hv_machine_hull'
    }).id('gregification:gtceu/shaped/industrial_ritual_machine');
    
    const addRitual = (items, chalks, eu, duration, output, id) => {
        // 1. Create the base recipe builder
        let recipe = allthemods.recipes.gtceu.industrial_ritual_machine(`gregification:ritual/${id}`)
            .itemInputs(items)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);

        // 2. Build an array of all required fluids
        let ritualFluids = [];
        const chalkIDs = ['white', 'yellow', 'purple', 'red'];
        
        chalks.forEach((amount, index) => {
            if (amount > 0) {
                ritualFluids.push(Fluid.of(`gtceu:liquid_${chalkIDs[index]}_chalk`, amount));
            }
        });

        // 3. Pass the entire array to inputFluids
        if (ritualFluids.length > 0) {
            recipe.inputFluids(ritualFluids);
        }
    };

    addRitual(['mekanism:digital_miner', '4x #gtceu:circuits/iv'], [10000, 10000, 10000, 10000], 32768, 2000, 'occultism:miner_marid_master', 'industrial_miner_marid_mekanism');	
    
    addRitual(['occultism:magic_lamp_empty', 'minecraft:gravel', 'minecraft:raw_iron', 'occultism:iesnium_pickaxe'], [1000, 1000, 1000, 1000], 32768, 2000, 'occultism:miner_foliot_unspecialized', 'industrial_miner_foliot_summon');	
    addRitual(['#occultism:miner/foliot', 'occultism:spirit_attuned_crystal', '#forge:storage_blocks/lapis', 'minecraft:raw_gold', 'occultism:iesnium_pickaxe'], [2000, 2000, 2000, 2000], 32768, 3000, 'occultism:miner_djinni_ores', 'industrial_miner_djinni_summon');	
    addRitual(['#occultism:miner/djinni', '#forge:gems/echo_shard', 'minecraft:crying_obsidian', 'occultism:afrit_essence', 'occultism:spirit_attuned_crystal', 'occultism:iesnium_pickaxe'], [3000, 3000, 3000, 3000], 32768, 4000, 'occultism:miner_afrit_deeps', 'industrial_miner_afrit_summon');	
    addRitual(['#occultism:miner/afrit', 'minecraft:dragon_breath', 'minecraft:totem_of_undying', 'minecraft:netherite_pickaxe', 'minecraft:nether_star', 'occultism:spirit_attuned_crystal', 'occultism:iesnium_pickaxe'], [4000, 4000, 4000, 4000], 32768, 5000, 'occultism:miner_marid_master', 'industrial_miner_marid_summon');	

    addRitual(['4x minecraft:soul_sand', '#forge:gems/diamond', '#forge:ingots/gold', '#forge:ingots/silver'],[1000, 1000, 1000, 1000], 32768, 2000, 'occultism:soul_gem', 'occultism_soul_gem');
});