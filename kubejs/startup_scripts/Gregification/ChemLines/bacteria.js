GTCEuStartupEvents.registry('gtceu:material', event => {
    const bacteriaChainDusts = [
        { name: 'seed_culture', color: 0xA8C878, iconSet: 'DULL' },
        { name: 'cultivated_bacteria', color: 0x8CB860, iconSet: 'DULL' },
        { name: 'vegetative_culture', color: 0x6EA048, iconSet: 'DULL' },
        { name: 'bacterial_matrix', color: 0x508A30, iconSet: 'DULL' },
        { name: 'mutated_bacterium', color: 0x9AD850, iconSet: 'RADIOACTIVE' },
        { name: 'bacteria_colony', color: 0x3C7020, iconSet: 'DULL' },
    ];


    bacteriaChainDusts.forEach(mat => {
        event.create(mat.name)
            .dust()            
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet]);
    });

    event.create('artificial_cerebrospinal_fluid')
        .fluid()
        .color(0xA8D8E8)
        .iconSet(GTMaterialIconSet.FLUID)
        .components('2x sodium', '1x potassium', '1x calcium', '1x magnesium', '2x glycerol', '6x distilled_water');
});