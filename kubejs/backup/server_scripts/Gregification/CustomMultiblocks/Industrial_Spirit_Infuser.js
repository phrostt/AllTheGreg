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
            .itemInputs(itemsIn)
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(eut);

        if (fluidIn) { recipe.inputFluids(fluidIn) }
        if (fluidOut) { recipe.outputFluids(fluidOut) }
    };

    addSpiritInfuser(["occultism:chalk_white_impure", "occultism:datura"], null, 'occultism:chalk_white', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_gold_impure", "occultism:datura"], null, 'occultism:chalk_gold', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_purple_impure", "occultism:datura"], null, 'occultism:chalk_purple', null, 128, 200);
    addSpiritInfuser(["occultism:chalk_red_impure", "occultism:datura"], null, 'occultism:chalk_red', null, 128, 200);


    addSpiritInfuser(["minecraft:diamond", "occultism:datura"], null, 'occultism:spirit_attuned_gem', null, 128, 20);
    addSpiritInfuser(["occultism:demons_dream_essence", "occultism:datura"], null, 'occultism:otherworld_essence', null, 128, 20);
    addSpiritInfuser(["minecraft:oak_sapling", "occultism:datura"], null, 'occultism:otherworld_sapling_natural', null, 128, 20);

    addSpiritInfuser(["occultism:otherworld_log", "occultism:datura"], null, 'occultism:otherworld_ashes', null, 128, 20);
    addSpiritInfuser(["minecraft:andesite", "occultism:datura"], null, 'occultism:otherstone', null, 128, 20);

    addSpiritInfuser(["minecraft:black_dye", "occultism:datura"], null, 'occultism:purified_ink', null, 128, 40);
    addSpiritInfuser(["minecraft:book", "occultism:datura"], null, 'occultism:taboo_book', null, 128, 40);
    addSpiritInfuser(["minecraft:writable_book", "occultism:datura"], null, 'occultism:book_of_binding_empty', null, 128, 40);
    addSpiritInfuser(["minecraft:feather", "occultism:datura"], null, 'occultism:awakened_feather', null, 128, 40);

    addSpiritInfuser([Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:silver"}}').strongNBT(), "occultism:datura"], null, [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iesnium"}}')], null, 2048, 600, 'iesnium_bee');
});