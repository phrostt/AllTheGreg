// Adds every custom ore as a possible Eldritch Miner output at weight 1.
// Assumes ore item id pattern: gtceu:<name>_ore
// Assumes ore tag pattern:     forge:ores/<name>
// Verify both assumptions against 2-3 entries in-game before trusting the full list.

ServerEvents.recipes(allthemods => {
    const customOres = [
        { ore: 'hellish', weight: 500 },
        { ore: 'terraria', weight: 500 },
        { ore: 'tenebrius', weight: 1 },
        { ore: 'bedrockium', weight: 1 }
    ];

    allthemods.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_ancient_eldritch'
        },
        result: {
            item: `occultism:chalk_void`
        },
        weight: 20
    }).id(`occultism:void_chalk`)

    customOres.forEach(entry => {
        let ore = entry.ore;
        let weight = entry.weight;

        allthemods.custom({
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
    allthemods.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_ancient_eldritch'
        },
        result: {
            item: 'occultism:mining_dim_core'
        },
        weight: 20
    }).id(`occultism:eldritch_miner_mining_dim_core`)

    allthemods.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_ancient_eldritch'
        },
        result: {
            item: 'gtceu:atomic_core'
        },
        weight: 20
    }).id(`gtceu:atomic_core`)

    allthemods.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_ancient_eldritch'
        },
        result: {
            item: 'gtceu:element_blank'
        },
        weight: 20
    }).id(`gtceu:element_blank`)


    allthemods.custom({
        type: 'occultism:miner',
        ingredient: {
            item: 'occultism:miner_marid_master'
        },
        result: {
            item: 'occultism:mining_dim_core'
        },
        weight: 5
    }).id(`occultism:master_miner_mining_dim_core`)


    function parseItemRef(ref) {
    if (typeof ref === 'string') {
        return ref;
    }
    if (ref && typeof ref === 'object') {
        if (ref.tag) {
            return `#${ref.tag}`;
        }
        if (ref.item) {
            let count = ref.count || 1;
            return count > 1 ? `${count}x ${ref.item}` : ref.item;
        }
    }
    return null;
    }
    function bareNameForId(itemRef) {        
        return itemRef.replace(/^#/, '').replace(/^\d+x\s*/i, '');
    }

    allthemods.forEachRecipe({ type: 'evilcraft:blood_infuser' }, recipe => {
        let data = JSON.parse(recipe.json);

        let inputItem = parseItemRef(data.item);
        let outputItem = parseItemRef(data.result ? data.result.item : null);

        if (!outputItem || !inputItem) {
            //console.error(`[bio_electrical_infuser] Skipping ${recipe.id} - non-string item reference`);
            return;
        }

        let inputID = bareNameForId(inputItem).replace(/[:# ]/g, '_');
        let outputID = bareNameForId(outputItem).replace(/[:# ]/g, '_');
        let recipeId = String(`gregification:bio_electrical_infuser/${inputID}_to_${outputID}`);

        let bio_recipe = allthemods.recipes.gtceu.bio_electrical_infuser(recipeId)
            .itemInputs(inputItem)
            .itemOutputs(outputItem)
            .duration(data.duration);            

        if (data.fluid) {
            bio_recipe.inputFluids(`#forge:sanguine_concentrate ${data.fluid.amount}`);
        }

        switch (data.tier) {
            case 1: bio_recipe.notConsumable('evilcraft:promise_tier_1'); bio_recipe.EUt(2048); break;
            case 2: bio_recipe.notConsumable('evilcraft:promise_tier_2'); bio_recipe.EUt(8192); break;
            case 3: bio_recipe.notConsumable('evilcraft:promise_tier_3'); bio_recipe.EUt(32768); break;
            default: bio_recipe.EUt(512); break;
        }
    });

    allthemods.recipes.gtceu.bio_electrical_infuser('gregification:bio_electrical_infuser/weakblood_orb_to_bound_blood_drop')
        .itemInputs('#forge:blood_orb')
        .itemOutputs('evilcraft:bound_blood_drop')
        .inputFluids('#forge:sanguine_concentrate 10000')
        .duration(1000)
        .notConsumable('evilcraft:promise_tier_2')
        .EUt(8192)

    allthemods.recipes.gtceu.bio_electrical_infuser('gregification:bio_electrical_infuser/blood_coated_blade')
        .itemInputs(
            [
                'gtceu:tungsten_carbide_buzz_saw_blade',
                '4x #forge:plates/unobtainium',
                '4x #forge:plates/vibranium'
            ])
        .itemOutputs('gtceu:blood_coated_blade')
        .inputFluids('#forge:sanguine_concentrate 64000')
        .notConsumable('evilcraft:promise_tier_3')
        .duration(1000)
        .EUt(8192)


})
