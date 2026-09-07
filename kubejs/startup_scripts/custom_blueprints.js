StartupEvents.registry('item', allthemods => {
    // List your unique blueprint identifiers here
    const customBlueprints = [
        {id: 'blank', name: 'Blank'},
        {id: 'creative_container', name: 'Creative Container'},     //ender dragon model
        {id: 'mob_swab', name: 'Mob Swab'},                         //zombie model
        {id: 'mekasuit', name: 'MekaSuit'},                         //kevlar
        {id: 'waystone', name: 'Waystone'},                         //berylium singularity
        {id: 'quantum_computer', name: 'Quantum Computer'},         //ae2additions:cell_component_16384
        {id: 'assembler_matrix', name: 'Assembler Matrix'},         //ae2additions:cell_component_16384
        {id: 'laser_drill', name: 'Laser Drill'},                   //eldritch miner
        {id: 'ender_cell', name: 'Ender Cell'},                     //gargantuam flux storage
    ];

    customBlueprints.forEach(bp => {        
        allthemods.create(`gtceu:blueprint_${bp.id}`)            
            .texture('minecraft:item/paper')
            .color(0, 0x007EA7)
            .rarity('ADVANCED')
            .displayName(`Blueprint (${bp.name})`)                                                
            .tooltip(`§7A ${bp.name} blueprint.`);
        });
});