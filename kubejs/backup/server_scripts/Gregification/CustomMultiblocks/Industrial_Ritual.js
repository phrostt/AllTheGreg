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

    addRitual(['mekanism:digital_miner', '4x #gtceu:circuits/iv'], [2000, 2000, 2000, 2000], 32768, 2000, 'occultism:miner_marid_master', 'industrial_miner_marid_summon');	
});