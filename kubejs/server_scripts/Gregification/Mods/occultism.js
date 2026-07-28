// Adds every custom ore as a possible Eldritch Miner output at weight 1.
// Assumes ore item id pattern: gtceu:<name>_ore
// Assumes ore tag pattern:     forge:ores/<name>
// Verify both assumptions against 2-3 entries in-game before trusting the full list.

ServerEvents.recipes(event => {
    const customOres = [
        { ore: 'hellish', weight: 500 },
        { ore: 'terraria', weight: 500 },
        { ore: 'tenebrius', weight: 1 },
        { ore: 'bedrockium', weight: 1 }
    ];

    customOres.forEach(entry => {
        let ore = entry.ore;
        let weight = entry.weight;

        event.custom({
            type: 'occultism:miner',
            ingredient: {
                item: 'occultism:miner_ancient_eldritch'
            },
            result: {
                item: `gtceu:${ore}_ore`
            },
            weight: weight
        }).id(`occultism:eldritch_miner_${ore}`)

    })
    event.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_ancient_eldritch'
        },
        result: {
            item: 'occultism:mining_dim_core'
        },
        weight: 20
    }).id(`occultism:eldritch_miner_mining_dim_core`)
    event.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_marid_master'
        },
        result: {
            item: 'occultism:mining_dim_core'
        },
        weight: 5
    }).id(`occultism:master_miner_mining_dim_core`)
    
})
