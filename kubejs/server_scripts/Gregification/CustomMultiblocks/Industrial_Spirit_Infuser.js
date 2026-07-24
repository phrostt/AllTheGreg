ServerEvents.recipes(allthemods => {

    allthemods.shaped('gtceu:industrial_spirit_infuser', [
        'PCP',
        'FHD',
        'PCP'
    ], {
        H: 'gtceu:hv_machine_hull',
        C: '#gtceu:circuits/hv',
        P: '#forge:plates/manasteel',
        F: 'minecraft:flint_and_steel',
        D: 'occultism:datura'


    }).id('gregification:shaped/industrial_spirit_infuser');

    const addSpiritInfuser = (itemsIn, fluidIn, itemOut, fluidOut, eut, duration, cID) => {

        let idName;
        if (cID) { idName = cID; }
        else { idName = itemOut.replace(/[^a-z0-9]/gi, '_'); }

        let recipe = allthemods.recipes.gtceu.industrial_spirit_infuser(`gregification:spirit_infusion/${idName}`)
            .notConsumable('occultism:datura')    
            .itemInputs(itemsIn)            
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(eut);

        if (fluidIn) { recipe.inputFluids(fluidIn) }
        if (fluidOut) { recipe.outputFluids(fluidOut) }
    };

    addSpiritInfuser(["occultism:chalk_white_impure"], null, 'occultism:chalk_white', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_gold_impure"], null, 'occultism:chalk_gold', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_purple_impure"], null, 'occultism:chalk_purple', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_red_impure"], null, 'occultism:chalk_red', null, 128, 200);


    addSpiritInfuser(["minecraft:diamond"], null, 'occultism:spirit_attuned_gem', null, 128, 20);
    addSpiritInfuser(["occultism:demons_dream_essence"], null, 'occultism:otherworld_essence', null, 128, 20);
    addSpiritInfuser(["minecraft:oak_sapling"], null, 'occultism:otherworld_sapling_natural', null, 128, 20);

    addSpiritInfuser(["occultism:otherworld_log"], null, 'occultism:otherworld_ashes', null, 128, 20);
    addSpiritInfuser(["minecraft:andesite"], null, 'occultism:otherstone', null, 128, 20);

    addSpiritInfuser(["minecraft:black_dye"], null, 'occultism:purified_ink', null, 128, 40);
    addSpiritInfuser(["minecraft:book"], null, 'occultism:taboo_book', null, 128, 40);
    addSpiritInfuser(["minecraft:writable_book"], null, 'occultism:book_of_binding_empty', null, 128, 40);
    addSpiritInfuser(["minecraft:feather"], null, 'occultism:awakened_feather', null, 128, 40);

    addSpiritInfuser([Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:silver"}}').strongNBT()], null, [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iesnium"}}')], null, 2048, 600, 'iesnium_bee');
});